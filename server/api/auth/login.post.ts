export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const URL = config.url;

  logger.info(`${event.method}::[${event.path}]`);

  const body = await readBody(event);

  if (!body?.email || !body?.password) {
    return {
      code: 400,
      message: 'Bad request',
      data: null,
      timestamp: Date.now().toLocaleString()
    };
  }

  const email = body?.email as string;
  const password = body?.password as string;

  try {
    const users = await event.$fetch<IUser[]>(URL);
    const checkIfUserExist = (users || [])?.find((u) => u?.email == email);

    if (!Boolean(checkIfUserExist)) {
      return {
        code: 200,
        message: 'Invalid user login credentials',
        data: null,
        timestamp: Date.now().toLocaleString()
      };
    }

    if (checkIfUserExist?.email != email || checkIfUserExist?.password != password) {
      return {
        code: 200,
        message: 'Invalid user credentials',
        data: null,
        timestamp: Date.now().toLocaleString()
      };
    }

    //--- set token http-only cookie
    const COOKIE_EXP = new Date(Date.now() + 1000 * 60 * 15); //15 minutes expired;
    setCookie(event, 'token', 'd41d8cd98f00b204e9800998ecf8427e', {
      httpOnly: true,
      sameSite: 'strict',
      expires: COOKIE_EXP
    });

    //-- set user data http-only cookie
    setCookie(
      event,
      'user_info',
      JSON.stringify({
        id: checkIfUserExist?.id,
        first_name: checkIfUserExist?.first_name,
        last_name: checkIfUserExist?.last_name,
        email: checkIfUserExist?.email
      }),
      { httpOnly: true, sameSite: 'strict', expires: COOKIE_EXP }
    );

    return {
      code: 200,
      message: 'Login success',
      data: checkIfUserExist,
      timestamp: Date.now().toLocaleString()
    };
  } catch (error) {
    logger.error(
      error instanceof Error ? `${event.method}::${event.path}::ERROR(${error.message})` : ''
    );

    return {
      code: 500,
      message: 'Something went wrong',
      data: null,
      timestamp: Date.now().toLocaleString()
    };
  }
});

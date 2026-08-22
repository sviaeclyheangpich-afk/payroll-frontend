export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const serverUrl = config.url;

  try {
    logger.info(`${event.method}::[${event.path}]`);
    const response = await event.$fetch<IUser[]>(serverUrl);
    return {
      code: 200,
      message: 'Success',
      data: response,
      timestamp: Date.now().toLocaleString()
    };
  } catch (error) {
    logger.error(
      error instanceof Error ? `${event.method}::${event.path}::ERROR(${error.message})` : ''
    );
    return {
      code: 500,
      message: 'Error',
      data: null,
      timestamp: Date.now().toLocaleString()
    };
  }
});

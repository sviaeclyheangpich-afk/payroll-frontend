import { IUser } from '~~/shared/types/user';

export default defineEventHandler((event) => {
  const token = getCookie(event, 'token');
  const userInfo = getCookie(event, 'user_info');

  const parsedUserInfo = JSON.parse(userInfo || '{}') as IUser;

  logger.info(`${event.method}::[${event.path}]`);

  return {
    code: 200,
    message: 'Success',
    data: { isAuthenticated: Boolean(token), info: parsedUserInfo },
    timestamp: Date.now().toLocaleString()
  };
});

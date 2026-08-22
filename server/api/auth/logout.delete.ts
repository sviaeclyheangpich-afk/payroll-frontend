export default defineEventHandler(async (event) => {
  try {
    deleteCookie(event, 'token', { path: '/' });
    deleteCookie(event, 'user_info', { path: '/' });
    return {
      code: 200,
      message: 'Success',
      data: { success: true },
      timestamp: Date.now().toLocaleString()
    };
  } catch (error) {
    logger.error(
      error instanceof Error ? `${event.method}::${event.path}::ERROR(${error.message})` : ''
    );
    return {
      code: 500,
      message: 'Failed',
      data: { success: false },
      timestamp: Date.now().toLocaleString()
    };
  }
});

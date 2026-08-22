export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuth();
  console.log(to.path);
  if (to.matched.length === 0) return;
  const { data } = await $fetch<ISingleTonReponse<{ isAuthenticated: boolean; info: IUser }>>(
    '/api/auth/authenticate',
    {
      method: 'POST',
      headers: import.meta.server ? useRequestHeaders(['cookie']) : undefined
    }
  );

  if (!auth.email) {
    auth.isAuthenticated = !!data?.isAuthenticated;
    auth.email = data?.info?.email;
    auth.firstName = data?.info?.first_name;
    auth.lastName = data?.info?.last_name;
  }

  if (to.path !== '/' && !data?.isAuthenticated) {
    auth.$reset();
    return navigateTo('/', { replace: true });
  }

  if (to.path === '/' && data?.isAuthenticated) {
    return navigateTo('/dashboard', { replace: true });
  }
});

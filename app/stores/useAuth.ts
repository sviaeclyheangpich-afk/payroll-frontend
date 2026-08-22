import { defineStore } from 'pinia';

export const useAuth = defineStore('login', {
  state: (): IUserStore => ({
    isAuthenticated: false,
    email: null,
    firstName: null,
    lastName: null
  }),
  getters: {},
  actions: {
    async login(email: string, password: string) {
      try {
        const result = await $fetch<ISingleTonReponse<IUser>>('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });

        if (!result?.data) throw new Error(result?.message);

        this.isAuthenticated = true;
        this.email = result?.data?.email;
        this.firstName = result?.data?.first_name;
        this.lastName = result?.data?.last_name;

        return navigateTo('/dashboard', { redirectCode: 301, replace: true });
      } catch (error) {
        if (error instanceof Error) throw new Error(error?.message);
      }
    },

    async logout() {
      const { data } = await $fetch<ISingleTonReponse<{ success: boolean }>>('/api/auth/logout', {
        method: 'DELETE'
      });

      if (data?.success) {
        this.$reset();
        return navigateTo('/dashboard', { redirectCode: 301, replace: true });
      }
    }
  }
});

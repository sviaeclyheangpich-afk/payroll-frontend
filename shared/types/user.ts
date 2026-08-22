export interface IUser {
  id?: number;
  first_name: string;
  last_name: string;
  email?: string;
  password?: string;
}

export interface IUserStore {
  isAuthenticated: boolean;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

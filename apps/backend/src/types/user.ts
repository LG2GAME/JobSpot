// export type Role = 'candidate' | 'employer' | 'admin';

export interface SafeUser {
  id: number;
  email: string;
  //   role?: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: SafeUser;
  token: string;
}

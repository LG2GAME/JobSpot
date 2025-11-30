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

export interface ApiErrorResponseError {
  message: string;
  field?: string;
  status?: number;
}

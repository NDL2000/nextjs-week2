export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User';
};

export type CreateUserInput = {
  name: string;
  email: string;
  role: 'Admin' | 'User';
};

export type UpdateUserInput = Partial<CreateUserInput>;

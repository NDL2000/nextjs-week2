import { User, CreateUserInput, UpdateUserInput } from "./user.types";

// Use global still data (Only when use mock data)
const globalForUsers = globalThis as unknown as { users: User[] };

if (!globalForUsers.users) {
  globalForUsers.users = [
    { id: 1, name: "A Nguyen", email: "anguyen@example.com", role: "Admin" },
    { id: 2, name: "B Nguyen", email: "bnguyen@example.com", role: "User" },
    { id: 3, name: "C Nguyen", email: "cnguyen@example.com", role: "User" },
  ];
}

const users = globalForUsers.users;

export const userRepo = {
  findAll: async (): Promise<User[]> => {
    return users;
  },

  findById: async (id: number): Promise<User | undefined> => {
    return users.find((u) => u.id === id);
  },

  create: async (data: CreateUserInput): Promise<User> => {
    const newUser = { id: users.length + 1, ...data };
    users.push(newUser);
    return newUser;
  },

  update: async (id: number, data: UpdateUserInput): Promise<User> => {
    const index = users.findIndex((u) => u.id === id);
    users[index] = { ...users[index], ...data };
    return users[index];
  },

  delete: async (id: number): Promise<void> => {
    const index = users.findIndex((u) => u.id === id);
    users.splice(index, 1);
  },
};

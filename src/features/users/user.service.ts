import { z } from "zod";
import { userRepo } from "./user.repo";
import { CreateUserInput, UpdateUserInput } from "./user.types";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email"),
  role: z.enum(["Admin", "User"]),
});

export class ValidationError extends Error {
  errors: { path: string[]; message: string }[];

  constructor(errors: { path: string[]; message: string }[]) {
    super("Validation failed");
    this.errors = errors;
  }
}

export const userService = {
  getAll: async () => {
    return await userRepo.findAll();
  },

  getById: async (id: number) => {
    const user = await userRepo.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  },

  create: async (data: CreateUserInput) => {
    const result = userSchema.safeParse(data);
    if (!result.success) {
      throw new ValidationError(
        result.error.issues.map((e) => ({
          path: e.path.map(String),
          message: e.message,
        })),
      );
    }
    return await userRepo.create(result.data);
  },

  update: async (id: number, data: UpdateUserInput) => {
    await userService.getById(id);
    const result = userSchema.partial().safeParse(data);
    if (!result.success) {
      throw new ValidationError(
        result.error.issues.map((e) => ({
          // ← sửa errors → issues
          path: e.path.map(String),
          message: e.message,
        })),
      );
    }
    return await userRepo.update(id, result.data);
  },

  delete: async (id: number) => {
    await userService.getById(id);
    await userRepo.delete(id);
  },
};

"use server";

import { redirect } from "next/navigation";
import { userService } from "@/features/users/user.service";
import { revalidatePath } from "next/cache";

export type ActionState = {
  errors?: {
    name?: string[];
    email?: string[];
    role?: string[];
  };
  message?: string;
};

export async function createUserAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    role: formData.get("role") as "Admin" | "User",
  };

  try {
    await userService.create(data);
  } catch (error: any) {
    if (error?.errors) {
      const fieldErrors: Record<string, string[]> = {};
      for (const err of error.errors) {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = [];
        fieldErrors[field].push(err.message);
      }
      return { errors: fieldErrors as ActionState["errors"] };
    }
    return { message: "Something went wrong" };
  }
  revalidatePath("/users"); // refetch data
  redirect("/users");
}

export async function updateUserAction(id: number, formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    role: formData.get("role") as "Admin" | "User",
  };

  await userService.update(id, data);
  revalidatePath("/users"); // refetch data
  redirect("/users");
}

export async function deleteUserAction(id: number) {
  await userService.delete(id);
  revalidatePath("/users"); // refetch data
  redirect("/users");
}

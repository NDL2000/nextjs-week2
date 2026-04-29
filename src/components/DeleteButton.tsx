"use client";

import { deleteUserAction } from "@/actions/user.action";

export default function DeleteButton({ id }: { id: number }) {
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    await deleteUserAction(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-600 font-medium"
    >
      Delete
    </button>
  );
}

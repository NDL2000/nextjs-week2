'use client';

import { deleteUserAction } from '@/actions/user.action';

export default function DeleteButton({ id }: { id: number }) {
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    await deleteUserAction(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
    >
      Delete
    </button>
  );
}

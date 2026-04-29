"use client";

import { useActionState } from "react";
import { createUserAction, ActionState } from "@/actions/user.action";
import Link from "next/link";

const initialState: ActionState = {};

export default function Page() {
  const [state, formAction] = useActionState(createUserAction, initialState);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Add User</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a new user account
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {/* Global error */}
          {state.message && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {state.message}
            </div>
          )}

          <form action={formAction}>
            <div className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.errors?.name ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {state.errors?.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {state.errors.name[0]}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.errors?.email ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {state.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  name="role"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Create User
                </button>
                <Link
                  href="/users"
                  className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

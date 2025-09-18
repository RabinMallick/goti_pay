// app/(auth)/register/page.tsx
import React from "react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Register
        </button>
      </form>
      <p className="text-sm text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

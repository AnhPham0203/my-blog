"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNav() {
  const pathname = usePathname();

  return (
    <div className="text-center mt-4">
      {pathname === "/auth/login" ? (
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      ) : (
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      )}
    </div>
  );
}

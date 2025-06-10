import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eeeeef] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#7164c0]">
          Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-[#95989c]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[#e6e9e8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9492db]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-[#95989c]">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-[#e6e9e8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9492db]"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#7164c0] hover:bg-[#9492db] text-white font-semibold rounded-xl transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

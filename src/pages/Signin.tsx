import axios from "axios";
import Input from "../components/Input";
import { BACKEND_URL } from "../config";
import {  useRef } from "react";

const SignIn = () => {
  const userNameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  async function signin(e: React.FormEvent) {
    e.preventDefault();
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(username, password);
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });

    const jwt = response.data.token;

    localStorage.setItem("token", jwt);
    alert("You are now signed up");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eeeeef] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#7164c0]">
          Sign In
        </h2>
        <form onSubmit={signin} className="space-y-4">
          <Input
            referance={userNameRef}
            type="email"
            placeholder="you@example.com"
            label="Email"
          />
          <Input
            referance={passwordRef}
            type="password"
            placeholder="••••••••"
            label="Password"
          />

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

export default SignIn;

import { useRef } from "react";
import Input from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const userNameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  
  async function signup(e: React.FormEvent) {
    e.preventDefault();
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(username, password);
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });

    navigate("/signin")
    alert("You are now signed up");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eeeeef] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#7164c0]">
          Sign Up
        </h2>
        <form onSubmit={signup} className="space-y-4">
          <Input
            type="email"
            referance={userNameRef}
            placeholder="you@example.com"
            label="Email"
          />
          <Input
            type="password"
            referance={passwordRef}
            placeholder="••••••••"
            label="Password"
          />

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#7164c0] hover:bg-[#9492db] text-white font-semibold rounded-xl transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

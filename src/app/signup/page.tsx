"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alata } from "next/font/google";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });
    if (response.ok) {
      router.push("/login");
    } else {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className={`${alata.className} min-h-screen bg-[#4a4af6] flex items-center justify-center p-4`}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-black text-2xl font-bold text-center mb-2">Create an Account</h2>
        <p className="text-center text-gray-600 mb-6 text-sm">Create a account to continue</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative bg-gray-100 rounded-lg">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="esteban_schiller@gmail.com"
                className="w-full px-4 py-3 bg-transparent text-gray-700 focus:outline-none"
                required
              />
            </div>
          </div>
          
          <div>
            <div className="relative bg-gray-100 rounded-lg">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-3 bg-transparent text-gray-700 focus:outline-none"
                required
              />
            </div>
          </div>
          
          <div>
            <div className="relative bg-gray-100 rounded-lg">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full px-4 py-3 tracking-widest bg-transparent text-gray-700 focus:outline-none"
                required
              />
              <a href="#" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                Forget Password?
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mr-2 accent-[#4a4af6]"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept terms and conditions
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#4a4af6] text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account? 
            <a href="/login" className="text-[#4a4af6] ml-1 font-semibold">Login</a>
          </span>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alata } from "next/font/google";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, rememberPassword }),
    });
    if (response.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className={`${alata.className} min-h-screen bg-[#4a4af6] flex items-center justify-center p-4`}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-black text-2xl font-bold text-center mb-2">Login to Account</h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Please enter your email and password to continue
        </p>
        
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
              id="remember"
              checked={rememberPassword}
              onChange={(e) => setRememberPassword(e.target.checked)}
              className="mr-2 accent-[#4a4af6]"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember Password
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#4a4af6] text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account? 
            <a href="/signup" className="text-[#4a4af6] ml-1 font-semibold">Create Account</a>
          </span>
        </div>
      </div>
    </div>
  );
}
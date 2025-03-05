"use client";
import { useRouter } from "next/navigation";
import { Alata } from "next/font/google";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

export default function ErrorPage() {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className={`${alata.className} min-h-screen bg-[#4a4af6] flex items-center justify-center p-4`}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 text-center">
        <div className="relative mx-auto w-64 h-48 mb-6">
          <div className="absolute inset-0 bg-[#5856d6] rounded-lg flex items-center justify-center">
            <span className="text-white text-8xl font-bold">404</span>
          </div>
          <div className="absolute top-2 left-2 w-full h-full bg-white opacity-10 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-8 bg-[#f0f0f0] rounded-t-lg flex items-center px-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <h2 className="text-black text-xl font-semibold mb-4">Looks like you've got lost...</h2>
        
        <button
          onClick={handleBackToDashboard}
          className="w-full bg-[#4a4af6] text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
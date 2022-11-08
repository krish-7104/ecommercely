import React, { useEffect } from "react";
import { useRouter } from "next/router";
const MyAccount = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="flex justify-center bg-gray-900 container mx-auto">
      <p className="text-center text-2xl font-semibold py-6 text-gray-200 h-[100vh] flex mt-10">
        Under Constuction, Coming Soon ⚠️
      </p>
    </div>
  );
};

export default MyAccount;

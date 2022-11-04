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
    <div>
      <p className="text-center text-2xl font-semibold my-6">My Account</p>
    </div>
  );
};

export default MyAccount;

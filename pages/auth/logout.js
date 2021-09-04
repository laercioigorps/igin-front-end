import LoginForm from "../../components/auth/LoginForm.js";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function LogOut() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    localStorage.setItem("token", null);
    router.push("/auth/login");
  }

  return null
  
}

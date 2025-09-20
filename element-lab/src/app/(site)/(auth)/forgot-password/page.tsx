
import ForgotPassword from "@/app/components/auth/forgot-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Element Labs",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;

"use client";
import { SignIn } from "@clerk/nextjs";

const SignInPage:any = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  );

export default SignInPage;                                                                                                                                         
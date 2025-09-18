"use client";

import { imagePath } from "@/utils/baseurl";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";

const features = [
  { title: "GotiPay for Business", desc: "Simplify global payments.", icon: `${imagePath}svg/business.svg` },
  { title: "Seamless APIs", desc: "Integrate payments effortlessly.", icon: `${imagePath}svg/merchant.svg` },
  { title: "Accept Payments", desc: "Secure global payments easily.", icon: `${imagePath}svg/payments.svg` },
];

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-200 via-white to-purple-100 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 backdrop-blur-2xl rounded-full animate-pulse motion-safe:animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-300/20 backdrop-blur-3xl rounded-full animate-pulse motion-safe:animate-spin-slow"></div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 md:gap-12">
        {/* Features Left */}
        <div className="hidden md:flex flex-col justify-center items-end p-8 md:pe-[8vw] space-y-6">
          <div className="flex flex-col gap-4 w-full max-w-sm">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 hover:shadow hover:rounded-md hover:-translate-y-1 transition-all duration-500 opacity-0 animate-fadeUp"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow">
                  <Image src={feature.icon} alt={feature.title} width={30} height={30} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-xs mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}

            {/* Extra Info */}
            <div
              className="mt-6 text-sm text-gray-700 bg-white/50 backdrop-blur-md p-4 opacity-0 animate-fadeUp"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <h4 className="font-semibold text-purple-700 mb-1">Why choose GotiPay?</h4>
              <p className="text-xs leading-relaxed">
                Trusted by 10k+ businesses worldwide. Fast, secure and reliable payment solutions.
              </p>
              <div className="flex gap-3 mt-3 opacity-80 items-center">
                <Image src={`${imagePath}svg/visa.svg`} alt="Visa" width={40} height={20} />
                <Image src={`${imagePath}svg/master.svg`} alt="Mastercard" width={40} height={20} />
                <Image src={`${imagePath}svg/bkash.svg`} alt="bKash" width={40} height={20} />
                <Image src={`${imagePath}svg/Nagad.svg`} alt="Nagad" width={40} height={20} />
                <p className="text-xs">and more...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form Right */}
        <div className="flex items-center p-6 justify-center md:justify-start">
          <div className="w-full max-w-86 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200/50 space-y-4">
            {/* Logo */}
            <div className="flex justify-center mb-2 animate-fadeUp">
              <Image src={`${imagePath}svg/logo.svg`} alt="GotiPay" width={120} height={50} />
            </div>
            <p className="text-center text-gray-500 text-xs animate-fadeUp delay-100">
              Log in to continue with GotiPay Merchant
            </p>

            {/* Formik Form */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form Submitted:", values);
                setTimeout(() => setSubmitting(false), 1000);
              }}
            >
              {({ isSubmitting, values, setFieldValue }) => (
                <Form className="flex flex-col gap-4 text-sm animate-fadeUp delay-200">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="info@tripfindy.com"
                      className="w-full border border-gray-300 text-base text-gray-600 text-input rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-[10px] mt-1" />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Password</label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="********"
                        className="w-full border border-gray-300  text-base text-gray-600 text-input rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition"
                        onChange={(e: any) => {
                          setFieldValue("password", e.target.value);
                        }}
                      />
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </span>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-[10px] mt-1" />

                  </div>

                  {/* Remember + Forgot */}
                  <div className="flex justify-between items-center text-xs">
                    <label className="flex items-center gap-1 text-gray-600">
                      <input type="checkbox" className="accent-[var(--primary)]" /> Remember me
                    </label>
                    <a href="#" className="text-[var(--primary)] hover:underline">Forgot password?</a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    } bg-[var(--primary)] text-white py-2 rounded-md hover:bg-purple-700 transition font-medium text-sm shadow`}
                  >
                    {isSubmitting ? "Logging in..." : "Log In"}
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    New to GotiPay? <Link href="/register" className="text-[var(--primary)] hover:underline">Sign up</Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-xs text-gray-500 bg-white/40 backdrop-blur-md mt-auto relative z-20">
        © {new Date().getFullYear()} GotiPay. All rights reserved. |{" "}
        <a href="#" className="hover:text-purple-700">Privacy Policy</a> |{" "}
        <a href="#" className="hover:text-purple-700">Terms</a>
      </footer>

      {/* Tailwind Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeUp { 0% { opacity:0; transform:translateY(20px); } 100% { opacity:1; transform:translateY(0); } }
        .animate-fadeUp { animation: fadeUp 0.6s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes spin-slow { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  );
}

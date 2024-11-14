"use client";

import { useState } from "react";
import { apiConnector } from "@/lib/apiConnector";
import Cookies from "js-cookie";
import Image from "next/image";
import { z } from "zod";
import { useRouter } from "next/navigation";

const signupSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  city: z.string().min(1, { message: "City is required" }),
});

function Signup() {
    const router= useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      signupSchema.parse(formData);
      setErrors({});
      const response = await apiConnector("POST", "/user/register", formData);
      console.log(response.data);
      router.push("/login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((error) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error(err);
     
      }
    }
  };

  return (
    <div className="w-full mt-4 h-auto p-5">
      <div className="sm:w-[100%] md:w-[100%] lg:w-[60%] w-full sm:h-[600px] bg-white flex sm:flex-row box-border m-auto flex-col">
        <div className="w-full sm:w-1/2 bg-black flex flex-col items-center justify-center p-4 sm:p-0">
          <div className="h-[20%] flex flex-col items-center justify-center">
            <Image
              className="w-52"
              src="/images/animalsloverlogo.svg"
              width={200}
              height={128}
              alt="Animals lover logo"
            />
          </div>
          <div className="h-[79%] flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                className="w-56"
                src="/images/dogimg.svg"
                width={500}
                height={400}
                alt="Dog and Cat"
              />
              <Image
                className="absolute top-[-22px] right-[-24px] w-[83px]"
                src="/images/dogthumb.svg"
                width={130}
                height={130}
                alt="Dog and Cat"
              />
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 text-black">
          <h1 className="text-[#0C7203] text-center mt-3 mb-3 font-bold">
            Create an Account
          </h1>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-4/5 m-auto mt-1"
            >
              <input
                className="bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}

              <input
                className="bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <span className="text-red-500">{errors.phoneNumber}</span>
              )}

              <input
                className="bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}

              <input
                className="bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold"
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}

              <input
                className="bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold"
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <span className="text-red-500">{errors.city}</span>
              )}

              <button
                className="bg-[#0C7203] text-white rounded-[10px] p-3 text-xs tracking-wide font-bold"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="w-4/5 m-auto flex flex-row items-center justify-center gap-2">
            <div className="w-[40%] h-[2px] bg-black"></div>
            <div className="text-[#0C7203] font-bold">Or</div>
            <div className="w-[40%] h-[2px] bg-black"></div>
          </div>

          <div className="w-4/5 m-auto flex align-center justify-center gap-3">
            <a href="https://www.google.com">
              <Image
                className="cursor-pointer"
                src={"/images/google.svg"}
                width={37}
                height={37}
                alt="google logo"
              />
            </a>
            <a href="https://www.facebook.com">
              <Image
                className="cursor-pointer"
                src={"/images/facebook.svg"}
                width={37}
                height={37}
                alt="facebook logo"
              />
            </a>
          </div>

          <div className="w-4/5 m-auto mt-2 mb-2 pb-3">
            <p className="text-[12px] text-center">
              <span>
                <input
                  className="cursor-pointer mr-[3px]"
                  type="checkbox"
                  name="agree"
                />
              </span>
              By clicking Create account, I agree that I have read and accepted
              the Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

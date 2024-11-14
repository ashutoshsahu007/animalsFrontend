import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiConnector } from "@/lib/apiConnector";
import { DialogClose } from "@radix-ui/react-dialog";
import CheckAnimation from "@/components/common/checkAnimation";
import { Loader2 } from "lucide-react";

const ForgotPassword = () => {
  const ref = useRef();
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  let path;
  if (typeof window !== "undefined") {
    path =
      window?.location?.href.split("/")?.slice(0, -1)?.join("/") +
      "/reset-password";
  }

  const forgotPasswordHandler = async () => {
    setLoading(true);
    try {
      const { data } = await apiConnector("POST", `user/forget-password`, {
        email: email,
      });
      // if(data.status == 400){
      //   setError("This email is invalid,Please Check your email");
      // }
      if (data) {
        setIsEmailSend(true);
        setTimeout(() => {
          setOpen(false);
          setIsEmailSend(false);
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setError("This email is invalid, Please Check your email");
    }
    setLoading(false);
  };
  useEffect(() => {
    setError("");
  }, [email]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <Button variant="secondary" className="text-[#0C7203] text-sm hover:underline">
          Forgot Password
        </Button>
      </DialogTrigger>
      <DialogContent>
        {isEmailSend ? (
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <CheckAnimation />
            <DialogHeader className="my-5">
              <DialogTitle>Reset link has been sent to your email</DialogTitle>
            </DialogHeader>
            {/* <DialogClose className="w-full">
                <Button className="w-full">Close</Button>
            </DialogClose> */}
          </div>
        ) : (
          <>
            <DialogHeader className="my-5">
              <DialogTitle>Forgot Password</DialogTitle>
              <DialogDescription>
                Enter your email here for getting reset link
              </DialogDescription>
            </DialogHeader>
            <Input
              ref={ref}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <p className="text-red-500">{error}</p>
            <Button disabled={loading} onClick={forgotPasswordHandler}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                <>Reset Password</>
              )}
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPassword;
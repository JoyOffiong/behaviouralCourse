import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import { signIn } from "next-auth/react";
import TextInput from "@/components/Form/TextInput/TextInput";
import FormButton from "@/components/Form/FormButton/FormButton";
import AlertDialog from "@/components/AlertDialog/AlertDialog";
import { useSession } from "next-auth/react";
import UseEmail from "@/components/Form/useEmail";
import { Eye, EyeSlash } from "iconsax-react";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });

  const { control, handleSubmit } = useForm();

  React.useEffect(() => {
    if (status === "authenticated") router.replace("/dashboard");
  }, [status]);

  const onSubmit = async (formData: any) => {
    setSubmitting(true);
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    console.log("result", result);

    if (result?.ok && result?.status === 200) router.push("/dashboard");
    else if (result?.error) {
      setAlert({
        open: true,
        message: result?.error,
        severity: "error",
      });
    }
    setSubmitting(false);
  };

  const [showPassword, setShowPassword] = useState(true)

  return (
    <>
      {status === "unauthenticated" ? (
        <div className="flex items-center flex-col py-[4rem]" id='bg'>
          <AlertDialog
            open={alert?.open}
            severity={alert?.severity}
            message={alert?.message}
            handleClose={() =>
              setAlert({
                open: false,
              })
            }
          />
          {/* logo */}
          <div className="">
            <Image src="https://piclearn-bucket-dev.s3.amazonaws.com/logo/pic-logo.png" width={98} height={47} alt="logo" />
          </div>

          <div className="bg-white w-[80%] mx-auto md:w-[36%] mt-[36px] rounded-lg items-center boxShadow px-4 md:px-8">
            <Heading text="Welcome Back" />

            <div className="mt-10  w-full flex py-4 font-normal  justify-center text-center text-[#596080] gap-2 pl-5 text-sm border-[1px] rounded-lg">
              <Image
                src="/assets/Google G.png"
                width={20}
                height={10}
                alt="logo"
              />{" "}
              <p className="font-thin "> Continue with Google</p>
            </div>
            <div className="flex flex-col justify-center items-center pb-10 ">
              <UseEmail />
              <form className=" w-full items-center  ">
                <div className="flex flex-col pb-8 border-none">
                  <label
                    htmlFor=""
                    className="text-[#596080] text-sm font-normal"
                  >
                    Email Address
                  </label>
                  <TextInput
                    name="email"
                    placeholder="Enter Email Address"
                    control={control}
                    type="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    }}
                  />
                </div>
                <div className="flex relative flex-col pb-2">
                  <label
                    htmlFor=""
                    className="text-[#596080] text-sm font-normal"
                  >
                    Password
                  </label>
                  <TextInput
                    name="password"
                    placeholder="Enter Password"
                    control={control}
                    type={`${!showPassword ? `text`: `password`}`}
                    rules={{
                      required: "password is required",
                    }}
                  />
                  <span className="absolute right-6 mt-9"> {showPassword?    <Eye size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword(!showPassword)}/> : <EyeSlash size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword(!showPassword)}/>}
         </span>
                </div>
                <Link href={"/forgotpassword"}>
                  <p className="text-[#2D41A5] font-bold text-sm pb-6">
                    Forgot Password
                  </p>
                </Link>

                <FormButton
                  submitting={submitting}
                  onClick={handleSubmit(onSubmit)}
                  label={"Login"}
                />
              </form>
            </div>

            <p className="text-[#596080] text-xs font-bold flex justify-center pb-20 gap-4">
              Don’t have an account?
              <Link href={"/createaccount"}>
                <span className="text-[#2D41A5] text-xs font-bold">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

Home.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

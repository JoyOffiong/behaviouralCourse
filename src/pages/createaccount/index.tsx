import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import { useRouter } from "next/router";
import Link from "next/link";
import { RegisterModel } from "@/core/models/register.model";
import authService from "@/core/services/auth.servce";
import FormButton from "@/components/Form/FormButton/FormButton";
import TextInput from "@/components/Form/TextInput/TextInput";
import AlertDialog from "@/components/AlertDialog/AlertDialog";
import UseEmail from "@/components/Form/useEmail";

export default function CreateAccount() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });
  const { control, handleSubmit } = useForm();

  const onSubmit = async (formData: any) => {
    setSubmitting(true);
    const registerData: RegisterModel = { ...formData };
    registerData.email = registerData.email.trim();

    const { ok, data, problem }: any = await authService.register(registerData);

    if (ok && data?.success) {
      // verify social user
      //else
      setAlert({
        open: true,
        message: "Registration Successful",
        severity: "success",
      });
      router.push({
        pathname: "/otp",
        query: { email: registerData.email },
      });
    } else if (problem === "CLIENT_ERROR" && data.data) {
      if (data.data === "User not activated") {
        setAlert({
          open: true,
          message: data.data || "Unexpected error, Please try again!",
          severity: "error",
        });
        router.push({
          pathname: "/otp",
          query: { email: registerData.email },
        });
      } else
        setAlert({
          open: true,
          message: data.data || "Unexpected error, Please try again!",
          severity: "error",
        });
    } else {
      setAlert({
        open: true,
        message: "Unexpected error, Please try again!",
        severity: "error",
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="flex items-center flex-col pb-[54px] ">
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
      <Link href={"/"}>
        <div className=" mt-[54px]">
          <Image
            src="https://piclearn-bucket-dev.s3.amazonaws.com/logo/pic-logo.png"
            width={100}
            height={50}
            alt="logo"
          />
        </div>
      </Link>
      <div className=" bg-white w-[80%] mx-auto md:w-[36%]  mt-[36px] rounded-lg items-center boxShadow md:px-8 px-4">
        <Heading text="Create An Account" />

        <div className="mt-10  w-full flex py-4 font-normal  justify-center text-center text-[#596080] gap-2 pl-5 text-sm border-[1px] rounded-lg">
          <Image src="/assets/Google G.png" width={20} height={10} alt="logo" />{" "}
          <p className="font-thin"> Continue with Google</p>
        </div>

        <div className="flex flex-col justify-center items-center pb-10 ">
          <UseEmail />

          <form className=" w-full items-center  ">
            <div className="flex flex-col pb-8 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                First Name
              </label>
              <TextInput
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                control={control}
                rules={{
                  min: 3,
                  required: "First Name is required",
                }}
              />
            </div>
            <div className="flex flex-col pb-8 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                Last Name
              </label>
              <TextInput
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                control={control}
                rules={{
                  min: 3,
                  required: "Last Name is required",
                }}
              />
            </div>
            <div className="flex flex-col pb-8 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                Email Address
              </label>
              <TextInput
                name="email"
                placeholder="Enter Email Address"
                type="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                }}
              />
            </div>

            <FormButton
              submitting={submitting}
              onClick={handleSubmit(onSubmit)}
              label={"Create Account"}
            />
          </form>
        </div>

        <p className="text-[#596080] font-bold text-xs flex justify-center pb-20 gap-4">
          Already have an account?{" "}
          <Link href={"/"}>
            <span className="text-[#2D41A5] text-xs font-bold">Sign In</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

CreateAccount.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import { useRouter } from "next/router";
import TextInput from "@/components/Form/TextInput/TextInput";
import FormButton from "@/components/Form/FormButton/FormButton";
import authService from "@/core/services/auth.servce";
import AlertDialog from "@/components/AlertDialog/AlertDialog";
import Link from "next/link";

export default function ForgotPassword() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });

  const onSubmit = async (formData: any) => {
    setSubmitting(true);

    const { ok, status, data, problem }: any = await authService.forgotPassword(
      formData.email
    );
    if (ok && status === 200) {
      setAlert({
        open: true,
        message: data?.data,
        severity: "success",
      });
    } else if (problem === "CLIENT_ERROR" && data.data) {
      setAlert({
        open: true,
        message: data.data || "Unexpected error, Please try again!",
        severity: "error",
      });
    } else
      setAlert({
        open: true,
        message: "Unexpected error, Please try again!",
        severity: "error",
      });

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
        <div className=" mt-[30px]">
          <Image
            src="https://piclearn-bucket-dev.s3.amazonaws.com/logo/pic-logo.png"
            width={98}
            height={47}
            alt="logo"
          />
        </div>
      </Link>

      <div className="bg-white w-[80%] mx-auto md:w-[36%] mt-[36px] rounded-lg items-center boxShadow md:px-8 px-4">
        <Heading text="Forgot Password?" />
        <p className="font-poppins font-normal text-center text-[#596080] text-sm pb-8">
          Enter the email address associated with your account
        </p>
        <div className="flex flex-col justify-center items-center pb-8 ">
          <form className=" w-full items-center  ">
            <div className="flex flex-col pb-4 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
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

            <FormButton
              submitting={submitting}
              onClick={handleSubmit(onSubmit)}
              label={"Continue"}
            />
          </form>
        </div>
        <p className="text-[#596080] text-xs font-bold flex justify-center pb-10 gap-4">
          Didn’t get a Link?
          <button
            onClick={handleSubmit(onSubmit)}
            className="text-xs font-bold text-[#2D41A5] hover:decoration-solid"
          >
            Send Link
          </button>
        </p>
      </div>
    </div>
  );
}

ForgotPassword.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

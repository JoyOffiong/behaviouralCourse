import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import TextInput from "@/components/Form/TextInput/TextInput";
import FormButton from "@/components/Form/FormButton/FormButton";
import { useRouter } from "next/router";
import authService from "@/core/services/auth.servce";
import AlertDialog from "@/components/AlertDialog/AlertDialog";

export default function ResetPassword() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [resetEmail, setResetEmail] = React.useState<string>();
  const [resetCode, setResetCode] = React.useState<string>();
  const [resetLinkExpired, setResetLinkExpired] = React.useState<boolean>();
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const { reset }: any = router?.query;

  const parsedReset = reset ? JSON.parse(decodeURIComponent(reset)) : null;

  React.useEffect(() => {
    if (parsedReset) {
      setResetEmail(parsedReset.email);
      setResetCode(parsedReset.code);
      if (parsedReset.duration < new Date()) setResetLinkExpired(true);
    }
  }, [parsedReset]);

  const onSubmit = async (formData: any) => {
    const dto = {
      email: resetEmail,
      code: resetCode,
      password: formData.password,
    };
    const { ok, data, status, problem }: any = await authService.resetPassword(
      dto
    );
    if (ok && status === 200) {
      setAlert({
        open: true,
        message: data?.data,
        severity: "success",
      });
      router.push({
        pathname: "/",
        query: { resetEmail },
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
        <div>
          <Image
            src="https://piclearn-bucket-dev.s3.amazonaws.com/logo/pic-logo.png"
            width={98}
            height={47}
            alt="logo"
          />
        </div>
      </Link>

      <div className="bg-white w-[80%] mx-auto md:w-[36%] mt-[36px] rounded-lg items-center boxShadow px-4 md:px-8">
        <Heading text="Reset Password" />
        <p className="font-poppins font-normal text-center text-[#596080] text-sm pb-10">
          Create a new secure password to access your account
        </p>
        <div className="flex flex-col justify-center items-center pb-10 ">
          <form className=" w-full items-center  ">
            <div className="flex flex-col pb-8 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                Password
              </label>
              <TextInput
                name="password"
                type="password"
                placeholder="Enter Password"
                control={control}
                rules={{
                  min: 4,
                  required: "Password is required",
                }}
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                Confirm Password
              </label>

              <TextInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                control={control}
                rules={{
                  min: 4,
                  required: "Confirm Password is required",
                  validate: (value: any) =>
                    value === pwd ? true : "Password does not match",
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
        {/* <p className="text-[#596080] font-medium flex justify-center pb-20 gap-4">
          Don’t have an account? <span className="text-[#2D41A5]">Sign Up</span>
        </p> */}
      </div>
    </div>
  );
}

ResetPassword.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

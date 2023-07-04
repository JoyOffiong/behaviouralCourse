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
import { url } from "inspector";

export default function OTP() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [newCodeSent, setNewCodeSent] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });
  const { control, handleSubmit } = useForm();

  const { email: emailAddress } = router?.query;
  const email: any = emailAddress ? emailAddress : null;

  const onSubmit = async (formData: any) => {
    setSubmitting(true);
    setNewCodeSent(false);

    const { ok, data, status, problem }: any =
      await authService.activateRegistration({
        activationCode: formData.otp,
        email,
      });

    if (ok && status === 200) {
      setAlert({
        open: true,
        message: data.data,
        severity: "success",
      });
      router.push({
        pathname: "/createpassword",
        query: { email },
      });
    } else if (problem === "CLIENT_ERROR" && data.data) {
      setAlert({
        open: true,
        message: data.data || "Unexpected error, Please try again!",
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
        <div>
          <Image
            src="https://piclearn-bucket-dev.s3.amazonaws.com/logo/pic-logo.png"
            width={98}
            height={47}
            alt="logo"
          />
        </div>
      </Link>

      <div className=" bg-white w-[80%] mx-auto md:w-[36%] lg:w-[50%] mt-[36px] rounded-lg items-center boxShadow px-4 md:px-8">
        <Heading text="Enter OTP" />
        <p className="font-poppins font-normal text-center text-[#596080] text-sm pb-10">
          Enter the one time password sent to your email
        </p>
        <div className="flex flex-col justify-center items-center pb-10 ">
          <form className=" w-full items-center  ">
            <div className="flex flex-col pb-8 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                OTP
              </label>
              <TextInput
                name="otp"
                type="number"
                placeholder="Enter OTP"
                control={control}
                rules={{
                  min: 4,
                  required: "OTP is required",
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
        <p className="text-[#596080] flex justify-center text-xs font-bold pb-20 gap-4">
          Didn’t get a code?{" "}
          <span className="text-[#2D41A5] text-xs font-bold">Resend Code</span>
        </p>
      </div>
    </div>
  );
}

OTP.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

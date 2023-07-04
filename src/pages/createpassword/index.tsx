import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import { useRouter } from "next/router";
import TextInput from "@/components/Form/TextInput/TextInput";
import FormButton from "@/components/Form/FormButton/FormButton";
import { RegisterModel } from "@/core/models/register.model";
import authService from "@/core/services/auth.servce";
import AlertDialog from "@/components/AlertDialog/AlertDialog";
import Link from "next/link";
import { Eye, EyeSlash } from "iconsax-react";

export default function CreatePassword() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });

  const { control, handleSubmit, watch } = useForm();

  const { email: emailAddress } = router?.query;
  const email: any = emailAddress ? emailAddress : null;

  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);

  const pwd = watch("password");

  const onSubmit = async (formData: any) => {
    setSubmitting(true);
    const dto: RegisterModel = { ...formData };
    dto.email = email ? email.trim() : null;

    const { ok, data, status, problem }: any = await authService.createPassword(
      dto
    );
    if (ok && status === 200) {
      setAlert({
        open: true,
        message: data.data,
        severity: "success",
      });
      router.push({
        pathname: "/",
        query: { email },
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

      <div className="bg-white w-[80%] mx-auto md:w-[36%] mt-[36px] rounded-lg items-center boxShadow md:px-8 px-4">
        <Heading text="Create your Password" />
        <p className="font-poppins font-normal text-center text-[#596080] text-sm pb-10">
          Enter a secure password to login to your account
        </p>
        <div className="flex flex-col justify-center items-center pb-10 ">
          <form className=" w-full items-center  ">
            <div className="flex flex-col pb-8 border-none">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                Password
              </label>
              <TextInput
                name="password"
                type={`${!showPassword ? `text` : `password`}`}
                placeholder="Enter Password"
                control={control}
                rules={{
                  min: 4,
                  required: "Password is required",
                }}
              />
              <span className="absolute right-14 mt-9">
                {" "}
                {showPassword ? (
                  <Eye
                    size="32"
                    color="#596080"
                    variant="Bulk"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeSlash
                    size="32"
                    color="#596080"
                    variant="Bulk"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="" className="text-[#596080] text-sm font-normal">
                Confirm Password
              </label>

              <TextInput
                name="confirmPassword"
                type={`${!showPassword1 ? `text` : `password`}`}
                placeholder="Confirm Password"
                control={control}
                rules={{
                  min: 4,
                  required: "Confirm Password is required",
                  validate: (value: any) =>
                    value === pwd ? true : "Password does not match",
                }}
              />
              <span className="absolute right-14 mt-9">
                {" "}
                {showPassword1 ? (
                  <Eye
                    size="32"
                    color="#596080"
                    variant="Bulk"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeSlash
                    size="32"
                    color="#596080"
                    variant="Bulk"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
            </div>

            <FormButton
              submitting={submitting}
              onClick={handleSubmit(onSubmit)}
              label={"Continue"}
            />
          </form>
        </div>
        {/* <p className="text-[#596080] font-medium flex justify-center pb-20 gap-4">
          Already have an account?
          <span className="text-[#2D41A5]">Sign In</span>
        </p> */}
      </div>
    </div>
  );
}

CreatePassword.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

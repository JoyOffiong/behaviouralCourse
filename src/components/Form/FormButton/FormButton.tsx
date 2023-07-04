import Spinner from "@/components/Spinner/Spinner";
import React from "react";

interface FormButtonProps {
  onClick: () => void;
  submitting: boolean;
  label: string;
}

const FormButton = ({ onClick, submitting, label }: FormButtonProps) => {
  return (
    <button
      disabled={submitting}
      onClick={onClick}
      className="bg-[#2D41A5] transition-all duration-700 ease-in-out hover:bg-[#233280] hover:rounded-3xl text-white flex justify-center items-center p-3 buttonShadow w-full rounded-[8px]"
      type="button"
    >
      {submitting && <Spinner size={"20px"} color="white" />}
      {label}
    </button>
  );
};

export default FormButton;

import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type props = {
  control: any;
  name: string;
  label?: string;
  placeholder: string;
  type?: string | "email" | "passsword" | "number" | "text";
};

const MultiLineInputBox = ({
  control,
  label,
  name,
  placeholder,
  type,
}: props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          type={type ? type : "text"}
          multiline
          rows={4}
          fullWidth
          className="w-full rounded-2xl font-poppins text-sm border-none  bg-[#F2F4FC] text-[#B8BBCC]"
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default MultiLineInputBox;

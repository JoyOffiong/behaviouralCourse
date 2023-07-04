import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type props = {
  control: any;
  name: string;
  label?: string;
  placeholder: string;
  rules: any;
  type?: string | "email" | "passsword" | "number" | "text";
  defaultValue?: string;
};

const TextInput = ({
  control,
  label,
  name,
  rules,
  placeholder,
  type,
  defaultValue,
}: props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }: any) => (
        <>
          <TextField
            value={value}
            onChange={(text) => {
              onChange(text);
            }}
            type={type ? type : "text"}
            className="w-full font-sans text-sm border-none rounded-2xl   bg-[#F2F4FC] text-[#B8BBCC]"
            placeholder={placeholder}
            error={error?.message ? true : false}
            onBlur={onBlur}
          />
          {error?.message && (
            <p className="text-red-500 text-[12px] pt-1">{error?.message}</p>
          )}
        </>
      )}
    />
  );
};

export default TextInput;

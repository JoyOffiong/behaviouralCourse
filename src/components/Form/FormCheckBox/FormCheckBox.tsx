import React from "react";
import { Controller } from "react-hook-form";

interface FormCheckBoxProps {
  control: any;
  name: string;
  rules: any;
  defaultValue?: string;
}

export default function FormCheckBox({
  control,
  name,
  rules,
  defaultValue,
}: FormCheckBoxProps) {
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
          <div className="flex items-center">
            <input
              type="checkbox"
              onBlur={onBlur}
              checked={value}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChange(event.target.checked);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          {error?.message && (
            <p className="text-red-500 text-[12px] pt-1">{error?.message}</p>
          )}
        </>
      )}
    />
  );
}

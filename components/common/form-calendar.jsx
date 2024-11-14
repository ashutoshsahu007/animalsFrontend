import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { DatePicker } from "@nextui-org/date-picker";
import { useController } from "react-hook-form";

export const FormCalender = ({ control, name, label }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <DatePicker
          value={field.value}
          onChange={(date) => field.onChange(date)}
          label={label}
          variant="underlined"
          showMonthAndYearPickers
        />
      </FormControl>
      {error && <FormMessage>{error.message}</FormMessage>}
    </FormItem>
  );
};

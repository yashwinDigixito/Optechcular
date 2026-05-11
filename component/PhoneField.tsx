"use client";
import React from "react";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString, E164Number } from "libphonenumber-js";
import TextField from "@mui/material/TextField";
import "react-phone-number-input/style.css";
import { FormControl, FormHelperText } from "@mui/material";

type InputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
};

// Custom MUI Input for PhoneInput
const MuiPhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  function MuiPhoneInput(props, ref) {
    const { value, onChange, placeholder, disabled } = props;

    return (
      <TextField
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        inputRef={ref}
        fullWidth
        margin="normal"
      />
    );
  }
);

type Props = {
  value: string;
  onChange: (full: string, code: string, number: string) => void;
  error?: boolean;
  helperText?: string;
};

const PhoneField: React.FC<Props> = ({
  value,
  onChange,
  error,
  helperText,
}) => {
  const handleChange = (val?: E164Number) => {
    if (!val) {
      onChange("", "", "");
      return;
    }

    const phoneData = parsePhoneNumberFromString(val);

    if (phoneData) {
      onChange(
        val,
        `+${phoneData.countryCallingCode}`,
        phoneData.nationalNumber
      );
    }
  };

  return (
    <FormControl fullWidth error={error} sx={{ mt: 2 }}>
    <PhoneInput
      value={value}
      onChange={handleChange}
      defaultCountry="IN"
      international
      countryCallingCodeEditable={false}
      inputComponent={MuiPhoneInput}
    />
    <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default PhoneField;
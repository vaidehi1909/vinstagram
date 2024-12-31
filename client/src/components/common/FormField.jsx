import React from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox, Radio, RadioGroup } from "@mui/material";

const FormField = ({ 
  type = "text", 
  name, 
  label, 
  formik, 
  options = [], // For dropdowns or radios 
  ...props 
}) => {
  switch (type) {
    case "text":
    case "password":
    case "email":
      return (
        <TextField
          fullWidth
          label={label}
          type={type}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched[name] && formik.errors[name]}
          {...props}
        />
      );

    case "select":
      return (
        <FormControl fullWidth error={formik.touched[name] && Boolean(formik.errors[name])}>
          <InputLabel>{label}</InputLabel>
          <Select
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...props}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched[name] && formik.errors[name] && (
            <div style={{ color: "red", fontSize: "0.75rem" }}>
              {formik.errors[name]}
            </div>
          )}
        </FormControl>
      );

    case "radio":
      return (
        <FormControl error={formik.touched[name] && Boolean(formik.errors[name])}>
          <RadioGroup
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {formik.touched[name] && formik.errors[name] && (
            <div style={{ color: "red", fontSize: "0.75rem" }}>
              {formik.errors[name]}
            </div>
          )}
        </FormControl>
      );

    case "checkbox":
      return (
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label={label}
        />
      );

    default:
      return null; // For unsupported field types
  }
};

export default FormField;

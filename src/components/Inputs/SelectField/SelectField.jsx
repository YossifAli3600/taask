import Select from "react-select";
import styles from "../Inputs.module.css";
import { Field } from "formik";
import { RequiredIndicator } from "../../RequiredIndicator/RequiredIndicator";
import { Error } from "../../Error/Error";

export default function SelectField({
  options,
  name,
  error,
  backError,
  className,
  row,
  placeholder,
  title,
  additionalFunc,
  id,
  required,
  isMulti,
  isClearable,
}) {
  return (
    <div
      className={`d-flex w-100 flex-column ${row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
        } ${className ? className : ""}`}
    >
      <div className="d-flex gap-2">
        <label htmlFor={id} className="modal__label">
          {title} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredIndicator /> : ""}
      </div>
      <div className="w-100 h-100">
        <Field
          name={name}
          id={name}
          component={SelectInp}
          options={options}
          className={`${styles.select} mb-1`}
          placeholder={placeholder}
          isMulti={isMulti}
          isClearable={isClearable}
        />
        {<Error>{backError || error}</Error>}
      </div>
    </div>
  );
}

const SelectInp = ({
  field,
  form,
  options,
  className,
  additionalFunc,
  placeholder = "Select",
  isMulti,
  isClearable,
}) => {
  function handleSelectChange(value) {
    if (isMulti) {
      form.setFieldValue(field.name, value);
    } else {
      form.setFieldValue(field.name, value.value);
    }
    if (additionalFunc) {
      additionalFunc();
    }
  }
  return (
    <Select
      options={options}
      name={field.name}
      value={
        isMulti
          ? field.value
          : options.find((option) => option.value == field.value)
      }
      className={`${className}`}
      onChange={handleSelectChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
      isMulti={isMulti}
      isClearable={isClearable}
      styles={{
        valueContainer: (base) => ({
          ...base,
          overflowX: "auto",
          flexWrap: "unset",
        }),
        multiValue: (base) => ({
          ...base,
          minWidth: "fit-content",
        }),
      }}
    />
  );
};
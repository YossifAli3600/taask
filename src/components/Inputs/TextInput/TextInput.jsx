import { Field } from 'formik'
import React from 'react'
import { RequiredIndicator } from '../../RequiredIndicator/RequiredIndicator';
import styles from '../Inputs.module.css'
import { Error } from '../../Error/Error';
export const TextInput = ({ label, placeholder, id, type, name, error, backError, className, row, disabled, required, onChange, onBlur, readOnly, value, as, }) => {
    return (
        <div className={`flex flex-col ${row ? "md:flex md:items-center gap-3 " : " flex-col gap-2"} w-full ${className}  `}>
            <div className="flex gap-2">
                <label className='modal__label m-0' htmlFor={id}>{label} {row ? ":" : ""}</label>{" "}
                {required ? <RequiredIndicator /> : ""}
            </div>

            <div className='w-full'>
                {as == "field" ? (
                    <TextField
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        disabled={disabled}
                        onChange={onChange}
                        readOnly={readOnly}
                    />
                ) : (
                    <TextInp
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        disabled={disabled}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        readOnly={readOnly}
                    />
                )}
                {<Error>{backError || error}</Error>}
            </div>
        </div>
    )
}

function TextField({ type, placeholder, name, id, disabled, onChange, readOnly }) {
    let otherProps = {};
    if (onChange) otherProps = { onChange }
    return (
        <Field
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            className={`${styles.input} indent-9 w-full mb-1`}
            disabled={disabled}
            readOnly={readOnly}
            {...otherProps}
        />
    );
}

function TextInp({ type, placeholder, name, id, disabled, onChange, onBlur, value, readOnly }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            className={`${styles.input} ${styles["text-box"]} w-100 mb-1`}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            readOnly={readOnly}
        />
    );
}
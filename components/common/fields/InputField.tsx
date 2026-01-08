"use client";
import React from "react";

interface InputFieldProps {
    label?: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    inputClassName?: string;
    required?: boolean;
    disabled?: boolean;
    name?: string;
    id?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = "text",
    defaultValue,
    value,
    placeholder,
    onChange,
    className = "",
    inputClassName = "",
    required = false,
    disabled = false,
    name,
    id,
}) => {
    const defaultInputClasses =
        "input-field-default";
    const computedInputClasses =
        `${defaultInputClasses} ${inputClassName}`.trim();

    return (
        <div className={className}>
            {label && (
                <label className="form-label-default">
                    {label}
                    {required && <span className="text-red">*</span>}
                </label>
            )}
            <input
                type={type}
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={computedInputClasses}
                required={required}
                disabled={disabled}
                name={name}
                id={id}
            />
        </div>
    );
};

export default InputField;

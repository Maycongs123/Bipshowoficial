import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Clean } from "@/components/icons/Clean";
import { theme } from "@/shared";
import { IconButton } from "@/components/IconButton";
import { Password } from "@/components/icons/Password";
import { NotVisibled } from "@/components/icons/NotVisibled";
import { ContainerInput } from "./styles";
import { IInput } from "./interface";

export const Input: React.FC<IInput> = ({
    label,
    name,
    id,
    mask,
    setIsCpf,
    rules,
    errorText,
    password,
    defaultValue,
    isCpf,
    disabledClean,
    onClean,
    ...rest
}) => {
    const { control, setValue, watch } = useFormContext();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const isValue = watch(name);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isValue) {
            setIsFocused(true);

            if (setIsCpf) {
                const firstLetterNumber = /^\d/;
                if (firstLetterNumber.test(isValue)) {
                    setIsCpf(true);

                    if (inputRef?.current?.type === "email") {
                        inputRef.current.type = "tel";
                    }
                    if (inputRef.current) {
                        inputRef.current.value = isValue;
                        inputRef.current.selectionStart =
                            inputRef.current.value.length;
                        inputRef.current.selectionEnd =
                            inputRef.current.value.length;
                    }
                } else {
                    setIsCpf(false);
                }
            }
        } else {
            if (setIsCpf) {
                setIsCpf(false);
            }
        }
    }, [isValue, name]);

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={mask ? mask(defaultValue || "") : defaultValue}
            rules={rules}
            render={({ field }) => (
                <ContainerInput
                    className={`${
                        isFocused || isValue || rest.readOnly || defaultValue
                            ? "active"
                            : ""
                    } ${rest.disabled ? "disabled" : ""} ${
                        errorText && errorText !== "" ? "error" : ""
                    }`}
                >
                    <label
                        htmlFor={id}
                        className={`${
                            isFocused
                                ? ""
                                : isValue || rest.readOnly || defaultValue
                                ? "activeLabel"
                                : "active"
                        } ${
                            isValue || rest.readOnly || defaultValue
                                ? "activeLabel"
                                : ""
                        } ${password ? "password" : ""}`}
                    >
                        {label}
                    </label>
                    <input
                        {...field}
                        ref={inputRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => {
                            if (mask) {
                                field.onChange(mask(e.target.value));
                            } else {
                                field.onChange(e.target.value);
                            }
                        }}
                        {...rest}
                        disabled={rest.disabled}
                        type={rest.type}
                    />
                    {isValue &&
                        !password &&
                        !rest.disabled &&
                        !disabledClean && (
                            <IconButton
                                onClick={() => {
                                    if(onClean){
                                        onClean()
                                    }
                                    setValue(name, "");
                                    setIsFocused(false);
                                }}
                            >
                                <Clean
                                    color="#ffffff"
                                    width={24}
                                    height={24}
                                />
                            </IconButton>
                        )}
                    {password && isValue && (
                        <IconButton onClick={password.onClick}>
                            {rest.type === "text" && (
                                <Password
                                    color="#ffffff"
                                    width={24}
                                    height={24}
                                />
                            )}
                            {rest.type === "password" && (
                                <NotVisibled
                                    color="#ffffff"
                                    width={24}
                                    height={24}
                                />
                            )}
                        </IconButton>
                    )}
                    {errorText && errorText !== "" && (
                        <p className="text-dark">{errorText}</p>
                    )}
                </ContainerInput>
            )}
        />
    );
};

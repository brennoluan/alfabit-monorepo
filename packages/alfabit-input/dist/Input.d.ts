import React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    placeholder?: string;
    label?: string;
}
export declare const Input: ({ disabled, placeholder, label, ...props }: InputProps) => React.JSX.Element;

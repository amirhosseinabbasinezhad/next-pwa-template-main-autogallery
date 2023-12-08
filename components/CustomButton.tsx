
//import type { CustomButtonProps } from "../types";
import Image from "next/image";


const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: any) => (
    <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
            <div className="relative w-6 h-6">
               ===/
            </div>
        )}
    </button>
);

export default Button;
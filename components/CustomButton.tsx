"use client"
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={containerStyles}
        onClick={handleClick}

    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton
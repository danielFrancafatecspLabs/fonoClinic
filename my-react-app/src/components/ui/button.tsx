import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";          // adiciona size
  variant?: "primary" | "secondary";   // adiciona variant
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  variant = "primary",
  className = "",
}) => {
  const sizeClasses =
    size === "lg" ? "px-8 py-3 text-lg" :
    size === "sm" ? "px-3 py-1 text-sm" :
    "px-5 py-2";

  const variantClasses =
    variant === "secondary"
      ? "bg-white text-blue-600 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      onClick={onClick}
      className={`font-semibold rounded-full shadow-lg ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
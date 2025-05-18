import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
}) => {
  const baseClasses =
    "font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30",
    secondary:
      "bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600 shadow-lg hover:shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30",
    outline: "bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    text: "text-blue-500 hover:bg-blue-50",
  };

  const sizeClasses = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, icon }) => {
  return (
    <button className="bg-blue-400 text-lg font-medium px-4 py-2 rounded-lg flex items-center gap-2 text-white">
      {title}
      <div className="items-center inline-flex h-6 w-6">{icon}</div>
    </button>
  );
};

export default Button;

// components/CrispyButton.tsx
import React from 'react';

interface CrispyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary' | 'accent';
    size?: 'small' | 'medium' | 'large';
}

const CrispyButton: React.FC<CrispyButtonProps> = ({
    children,
    onClick,
    color = 'primary',
    size = 'medium'
}) => {
    const baseClasses = "font-pixel border-pixel transition-colors duration-300";

    const colorClasses = {
        primary: "bg-crispypix-600 text-crispypix-100 border-crispypix-400 hover:bg-crispypix-700",
        secondary: "bg-crispypix-1300 text-crispypix-1200 border-crispypix-1400 hover:bg-crispypix-1500",
        accent: "bg-crispypix-900 text-crispypix-100 border-crispypix-1000 hover:bg-crispypix-1000",
    };

    const sizeClasses = {
        small: "px-pixel-2 py-pixel text-pixel-xs",
        medium: "px-pixel-4 py-pixel-2 text-pixel-sm",
        large: "px-pixel-4 py-pixel-4 text-pixel-base",
    };

    return (
        <button
            className={`${baseClasses} ${colorClasses[color]} ${sizeClasses[size]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CrispyButton;
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "whatsapp";
    size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-btn font-ui font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-brand-primary text-white hover:bg-[#A65D48]": variant === "primary",
                        "border-2 border-brand-secondary bg-transparent text-brand-secondary hover:bg-brand-secondary/10":
                            variant === "outline",
                        "bg-[#25D366] text-white hover:bg-[#20bd5a]": variant === "whatsapp",
                        "h-11 px-6 text-sm": size === "default", // Min height 44px
                        "h-9 px-4 text-xs": size === "sm",
                        "h-14 px-8 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };

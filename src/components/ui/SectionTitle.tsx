import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    align?: "left" | "center";
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
    ({ className, title, align = "left", ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex flex-col gap-2",
                    {
                        "items-start text-left": align === "left",
                        "items-center text-center": align === "center",
                    },
                    className
                )}
            >
                <h2
                    ref={ref}
                    className="font-serif text-2xl md:text-3xl text-brand-secondary"
                    {...props}
                >
                    {title}
                </h2>
                <div className="h-[3px] w-[40px] bg-brand-accent" />
            </div>
        );
    }
);
SectionTitle.displayName = "SectionTitle";

export { SectionTitle };

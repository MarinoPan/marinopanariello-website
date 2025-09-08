"use client";
import { useState, useEffect } from "react";

export const BackgroundLines = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 px-6 pointer-events-none">
            <div className="gap-4 relative w-full h-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 opacity-70 max-h-screen transition-[max-height] duration-[2000ms] ease-[cubic-bezier(0.55,0,0.1,1)]">
                {[...Array(12)].map((_, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-2 ${
                            index >= 8
                                ? "hidden lg:grid"
                                : index >= 4
                                ? "hidden md:grid lg:grid"
                                : "grid"
                        }`}
                    >
                        <div
                            style={{ transitionDelay: `${index * 100}ms` }}
                            className={`w-[1px] bg-gray-light justify-self-start transition-[height] duration-1000 ease-in ${
                                isVisible ? "h-full" : "h-0"
                            }`}
                        ></div>
                        <div
                            style={{ transitionDelay: `${index * 100 + 50}ms` }}
                            className={`w-[1px] bg-gray-light justify-self-end transition-[height] duration-1000 ease-in ${
                                isVisible ? "h-full" : "h-0"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

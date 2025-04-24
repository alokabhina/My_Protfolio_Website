import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => onComplete(), 800);
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-700 ease-in-out
            ${fadeOut ? "opacity-0" : "opacity-100"} 
            bg-gradient-to-br from-black via-gray-900 to-gray-800 
            text-white flex flex-col items-center justify-center`}
        >
            <div className="mb-6 text-5xl font-mono font-extrabold text-blue-400 drop-shadow-lg tracking-wider">
                {text}
                <span className="ml-1 animate-[blink_1s_steps(2,start)_infinite]">|</span>
            </div>

            <div className="w-[220px] h-[3px] bg-gray-700 rounded overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-[shimmer_1.5s_linear_infinite] bg-[length:200%_100%]" />
            </div>
        </div>
    );
};

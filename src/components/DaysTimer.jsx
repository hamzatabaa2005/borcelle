import { useEffect } from 'react';

export default function DaysTimer({
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    setSeconds,
    totalSeconds
}) {
    const initialTotal = totalSeconds ?? (days * 86400 + hours * 3600 + minutes * 60 + seconds);

    useEffect(() => {
        if (initialTotal <= 0) return;

        const timer = setInterval(() => {
            if (setSeconds) {
                setSeconds((prev) => Math.max(0, prev - 1));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [initialTotal, setSeconds]);


    const d = String(Math.floor(initialTotal / 86400)).padStart(2, '0');
    const h = String(Math.floor((initialTotal % 86400) / 3600)).padStart(2, '0');
    const m = String(Math.floor((initialTotal % 3600) / 60)).padStart(2, '0');
    const s = String(initialTotal % 60).padStart(2, '0');

    const items = [
        { label: 'Days', value: d },
        { label: 'Hour', value: h },
        { label: 'Min', value: m },
        { label: 'Sec', value: s },
    ];

    return (
        <div className="flex items-center gap-1.5 font-sans">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-[#606060] text-white rounded-md w-11.5 h-12.5 flex flex-col items-center justify-center shadow-sm"
                >
                    <span className="text-[16px] font-bold leading-none tracking-tight">
                        {item.value}
                    </span>
                    <span className="text-[11px] font-normal text-gray-200 mt-1 leading-none">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
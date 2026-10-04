
import { useEffect } from 'react';

export default function Timer({ title, children, seconds, setSeconds }) {

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');

    return (
        <div className='text-pink-700 font-bolder flex gap-2'>
            {title ? <p className="text-gray-600">{title}</p> : <></>}
            {seconds > 0 ? `${mins}:${secs}` : children}
        </div>
    );
}
// CountdownTimer.js
import React, { useEffect, useState } from "react";
import "../../styles/home.css";

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countdown = () => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const intervalId = setInterval(countdown, 1000);
        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <div className="countdown-box">
                <div className="countdown-time">{timeLeft.days}</div>
                <div className="countdown-label">Días</div>
            </div>
            <div className="countdown-box">
                <div className="countdown-time">{timeLeft.hours}</div>
                <div className="countdown-label">HS</div>
            </div>
            <div className="countdown-box">
                <div className="countdown-time">{timeLeft.minutes}</div>
                <div className="countdown-label">MIN</div>
            </div>
            <div className="countdown-box">
                <div className="countdown-time">{timeLeft.seconds}</div>
                <div className="countdown-label">SEG</div>
            </div>
        </div>
    );
};

export default CountdownTimer;


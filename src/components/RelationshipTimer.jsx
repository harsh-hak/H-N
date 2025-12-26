import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import './RelationshipTimer.css';

const RelationshipTimer = () => {
    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const startDate = new Date('2022-11-01T00:00:00');

        const calculateTime = () => {
            const now = new Date();
            const difference = now - startDate;

            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
            const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeElapsed({ years, months, days, hours, minutes, seconds });
        };

        const timer = setInterval(calculateTime, 1000);
        calculateTime(); // Initial call

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Years', value: timeElapsed.years },
        { label: 'Months', value: timeElapsed.months },
        { label: 'Days', value: timeElapsed.days },
        { label: 'Hours', value: timeElapsed.hours },
        { label: 'Minutes', value: timeElapsed.minutes },
        { label: 'Seconds', value: timeElapsed.seconds }
    ];

    return (
        <motion.div
            className="timer-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="timer-header">
                <Clock size={24} color="#ff4d6d" />
                <h3>Time We've Been Together</h3>
            </div>

            <div className="timer-grid">
                {timeUnits.map((unit) => (
                    <div key={unit.label} className="timer-box">
                        <span className="timer-value">{unit.value}</span>
                        <span className="timer-label">{unit.label}</span>
                    </div>
                ))}
            </div>
            <p className="timer-footer">...and counting every second</p>
        </motion.div >
    );
};

export default RelationshipTimer;

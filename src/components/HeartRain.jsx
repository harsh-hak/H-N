import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartRain = () => {
    const [hearts, setHearts] = React.useState([]);

    React.useEffect(() => {
        const newHearts = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // percentage
            duration: Math.random() * 5 + 5, // 5-10 seconds
            delay: Math.random() * 5,
            size: Math.random() * 20 + 10,
            color: Math.random() > 0.5 ? "#ff4d6d" : "#ff8fa3"
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: -50, x: 0, opacity: 0 }}
                    animate={{
                        y: "110vh",
                        opacity: [0, 1, 1, 0],
                        rotate: 360
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        left: `${heart.left}%`,
                    }}
                >
                    <Heart size={heart.size} fill={heart.color} color={heart.color} />
                </motion.div>
            ))}
        </div>
    );
};

export default HeartRain;

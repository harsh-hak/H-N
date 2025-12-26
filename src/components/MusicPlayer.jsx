import React, { useState, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            console.log("Playing music (placeholder)");
            // audioRef.current.play(); // Uncomment when source is valid
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 100 }}>
            {/* Placeholder audio source */}
            <audio ref={audioRef} loop>
                <source src="#" type="audio/mp3" />
            </audio>

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    padding: '12px',
                    cursor: 'pointer',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
            >
                {isPlaying ? <Pause size={24} /> : <Music size={24} />}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;

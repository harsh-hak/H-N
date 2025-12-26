import React, { useState } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import loveSong from '../assets/love_song.m4a';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.log("Playback failed:", e));
        }
        setIsPlaying(!isPlaying);
        setHasInteracted(true);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        audio.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 100, display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* Hidden Player */}
            <audio ref={audioRef} loop src={loveSong} />

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
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>

            {isPlaying && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={toggleMute}
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(5px)',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '8px',
                        cursor: 'pointer',
                        color: 'rgba(255,255,255,0.7)',
                    }}
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </motion.button>
            )}

            {!hasInteracted && !isPlaying && (
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{
                        color: 'white',
                        fontSize: '0.8rem',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        pointerEvents: 'none'
                    }}
                >
                    Tap to play our song
                </motion.div>
            )}
        </div>
    );
};

export default MusicPlayer;

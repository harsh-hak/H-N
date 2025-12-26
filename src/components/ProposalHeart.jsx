import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import './ProposalHeart.css';

const ProposalHeart = () => {
    const [isPopped, setIsPopped] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Show the heart after a delay
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const handlePop = () => {
        setIsPopped(true);
    };

    if (!isVisible) return null;

    return (
        <div className="proposal-container">
            <AnimatePresence mode="wait">
                {!isPopped ? (
                    <motion.div
                        key="heart-trigger"
                        className="floating-heart-trigger"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePop}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="pulse-heart"
                        >
                            <Heart size={100} fill="#ff4d6d" color="#ff4d6d" />
                            <div className="pop-text">Tap to Pop</div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="proposal-message"
                        className="proposal-message"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <button onClick={() => setIsPopped(false)} className="close-btn">
                            <X size={24} color="#ff4d6d" />
                        </button>
                        <div className="sparkles">
                            <Sparkles size={40} color="#FFD700" className="sparkle s1" />
                            <Sparkles size={30} color="#FFD700" className="sparkle s2" />
                        </div>
                        <h1 className="marry-me-text">Marry Me?</h1>
                        <p className="sub-proposal">You are my forever.</p>
                        <div className="hearts-decoration">
                            <Heart size={30} fill="#ff4d6d" color="#ff4d6d" />
                            <Heart size={40} fill="#ff4d6d" color="#ff4d6d" style={{ margin: '0 10px' }} />
                            <Heart size={30} fill="#ff4d6d" color="#ff4d6d" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default ProposalHeart;

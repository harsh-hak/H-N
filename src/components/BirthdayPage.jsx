import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Music, Star, ArrowDown, Heart } from 'lucide-react';
import HeartRain from './HeartRain';
import PhotoGallery from './PhotoGallery';
import MusicPlayer from './MusicPlayer';
import './BirthdayPage.css';

const BirthdayPage = () => {
    return (
        <div className="birthday-container">
            <HeartRain />

            <motion.div
                className="content-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ display: 'inline-block', marginBottom: '1rem' }}
                >
                    <Cake size={64} color="#ff4d6d" />
                </motion.div>

                <h1 className="title-font birthday-title">
                    Happy Birthday <br />
                    <span className="name-highlight">Natanya wifey</span>
                </h1>

                <motion.div
                    className="message-card"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <p>
                        My Dearest Natanya wifey, <br /><br />
                        You are the poetry my heart has always wanted to write.
                        Wishing you a day as breathtakingly beautiful as the love you've brought into my life.
                        May this year be filled with all the joy you deserve and more.
                        I am endlessly lucky to call you mine. <br /><br />
                        Marry me soon.
                    </p>
                    <p className="signature">- Forever yours, Harsh, your husband</p>
                </motion.div>

                <motion.div
                    className="floating-icons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <Music size={24} className="float-icon i1" />
                    <Star size={24} className="float-icon i2" />
                    <Heart size={24} className="float-icon i3" fill="#ff4d6d" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    style={{ marginTop: '3rem' }}
                >
                    <p style={{ marginBottom: '10px', opacity: 0.8 }}>Scroll down for memories</p>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <ArrowDown size={24} color="#fff" />
                    </motion.div>
                </motion.div>

            </motion.div>

            <PhotoGallery />
            <MusicPlayer />
        </div>
    );
};

export default BirthdayPage;

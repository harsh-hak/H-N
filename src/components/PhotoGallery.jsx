import React from 'react';
import { motion } from 'framer-motion';
import './PhotoGallery.css';

// Import local images
import mem1 from '../assets/memory_1_new.jpg';
import mem2 from '../assets/memory_2_new.png';
import mem3 from '../assets/memory_3_new.jpg';
import mem4 from '../assets/memory_4.jpg';
import mem5 from '../assets/memory_5.jpg';
import mem6 from '../assets/memory_6.png';

const photos = [
    { id: 1, src: mem1, caption: "Dreams come true.", rot: -5 },
    { id: 2, src: mem2, caption: "I love you too", rot: 3 },
    { id: 3, src: mem3, caption: "You make me feel special.", rot: -2 },
    { id: 4, src: mem4, caption: "Our spirit animals 🐱", rot: 4 },
    { id: 5, src: mem5, caption: "We are weird together ❤️", rot: -3 },
    { id: 6, src: mem6, caption: "Holding on forever", rot: 2 },
    // Add more placeholders simply by reusing or adding placeholders
];

const PhotoGallery = () => {
    return (
        <div className="photo-gallery">
            <h2 className="gallery-title">Memory Lane</h2>

            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className="polaroid-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        style={{ rotate: photo.rot }}
                    >
                        <div className="photo-frame">
                            <img src={photo.src} alt={photo.caption} draggable="false" />
                        </div>
                        <div className="caption">{photo.caption}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;

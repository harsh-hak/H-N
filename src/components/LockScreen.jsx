import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import './LockScreen.css';

const LockScreen = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '108') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="lock-screen-container">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="icon-wrapper">
          <Heart className="heart-icon-lock" size={48} fill="#ff4d6d" />
        </div>

        <h2 className="title-font">Hello Natanya wifey</h2>
        <p className="subtitle">Enter the magic number to unlock</p>

        <form onSubmit={handleSubmit} className="lock-form">
          <motion.div
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Magic Number"
              className="password-input"
              autoFocus
            />
          </motion.div>
          <button type="submit" className="unlock-btn">
            Unlock <Lock size={16} style={{ marginLeft: '8px' }} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LockScreen;

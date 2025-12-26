import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LockScreen from './components/LockScreen';
import BirthdayPage from './components/BirthdayPage';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="lock-screen"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
          >
            <LockScreen onUnlock={() => setIsAuthenticated(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="birthday-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <BirthdayPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

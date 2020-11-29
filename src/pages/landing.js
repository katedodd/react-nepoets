import '../pages/styles/landing.css';
import Logo from '../imgs/logop.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Landing() {
  return (
    <AnimatePresence>
        <motion.div className="landing" 
            animate={{ scale: [1.25, 2, 1, 1.5, 1], transform: 50 }}
            transition={{ duration: 1.25, ease: "easeIn" }}
        >
            <header className="App-header">
                <Link to="/home">
                    <img src={Logo} className="App-logo" alt="logo"/>
                    <p>enter the nepo-verse.</p>
                </Link>
            </header>
        </motion.div>
    </AnimatePresence>
  );

}

export default Landing;


import { motion } from "framer-motion";

const LoadingWheel = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full white"
            />
        </div>
    );
};

export default LoadingWheel;
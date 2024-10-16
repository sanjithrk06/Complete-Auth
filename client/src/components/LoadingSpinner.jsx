import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className=" bg-transparent flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="w-5 h-5 border-4 border-t-4 border-t-primary border-orange-100 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;

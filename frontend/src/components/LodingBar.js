import { motion } from 'framer-motion';

const LoadingBar = () => {
  const barVariants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
      <motion.div
        className="h-full bg-blue-500"
        variants={barVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default LoadingBar;

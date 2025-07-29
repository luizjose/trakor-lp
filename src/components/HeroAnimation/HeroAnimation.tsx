import { motion } from "framer-motion";

type HeroAnimationProps = {
  start: boolean;
};

const HeroAnimation = ({ start }: HeroAnimationProps) => {
  const borderSquares = [0, -15, -30, -45];

  return (
    <div className="relative w-45 h-45 mx-auto">
      {borderSquares.map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full border-4 border-indigo-500"
          initial={{ rotate: 0 }}
          animate={start ? { rotate: angle } : {}}
          transition={{ duration: 1.2, delay: i * 0.1 }}
          style={{ transformOrigin: "center" }}
        />
      ))}

      <motion.div
        className="absolute w-35 h-35 bg-indigo-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={start ? { scale: 1, rotate: 375 } : {}}
        transition={{ duration: 1.4, delay: 0.2 }}
      />
    </div>
  );
};

export default HeroAnimation;

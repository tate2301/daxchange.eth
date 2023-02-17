import { motion } from "framer-motion";

export default function TickerCarousel() {
  const tickerVariants = {
    animate: {
      x: [0, -1024],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="@container w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="flex flex-nowrap gap-8"
        variants={tickerVariants}
        animate="animate"
      >
        <img
          src={"/assets/pekugara/Banner.png"}
          className="w-96 object-cover rounded-xl aspect-square"
        />
        <img
          src={"/assets/pekugara/Banner.png"}
          className="w-96 object-cover rounded-xl aspect-square"
        />
        <img
          src={"/assets/pekugara/Banner.png"}
          className="w-96 object-cover rounded-xl aspect-square"
        />
        <img
          src={"/assets/pekugara/Banner.png"}
          className="w-96 object-cover rounded-xl aspect-square"
        />
        <img
          src={"/assets/pekugara/Banner.png"}
          className="w-96 object-cover rounded-xl aspect-square"
        />
        <img
          src={"/assets/pekugara/Banner.png"}
          className="w-96 object-cover rounded-xl aspect-square"
        />
      </motion.div>
    </div>
  );
}

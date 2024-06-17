import { motion } from "framer-motion";
const Logo = () => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} className="h-14 w-32">
      <Logo />
    </motion.div>
  );
};

export default Logo;

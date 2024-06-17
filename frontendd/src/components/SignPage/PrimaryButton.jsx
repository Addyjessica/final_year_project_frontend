import { useNavigate } from "react-router-dom";
import SearchUp from "../../assets/search-up-right";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ input, route }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(`/${route}`, { replace: false })}
      className="flex bg-primary h-20 text-nowrap text-lg px-6 rounded-full  text-black justify-between items-center w-64"
    >
      <span>{input}</span>
      <SearchUp />
    </motion.div>
  );
};

export default PrimaryButton;

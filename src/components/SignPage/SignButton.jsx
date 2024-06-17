/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const SignButton = ({ value, route }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(`/${route}`, { replace: false })}
      className="px-6 py-2 cursor-pointer rounded-full border-2 border-primary w-auto h-auto"
    >
      {value}
    </motion.div>
  );
};

export default SignButton;

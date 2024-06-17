import { motion } from "framer-motion";
const SearchUp = (props) => (
  <motion.svg
    whileInView={{ x: [-10, 0, -10] }}
    transition={{ repeat: Infinity }}
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={18} cy={18} r={18} fill="#FF5C5E" />
    <path d="M25 19V11H17" stroke="white" strokeLinecap="round" />
    <path d="M25 11L11 25" stroke="white" strokeLinecap="round" />
  </motion.svg>
);
export default SearchUp;

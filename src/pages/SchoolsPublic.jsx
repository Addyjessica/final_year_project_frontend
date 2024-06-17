import { useEffect } from "react";
import { useUniversities } from "../store/sch_store";
import Logo from "../assets/svgs/logo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import search from "../assets/Search.svg";

const SchoolsPublic = () => {
  const schools = useUniversities((state) => state.schools);
  const setSchools = useUniversities((state) => state.setSchools);
  const isLoading = useUniversities((state) => state.isLoading);
  useEffect(() => {
    setSchools();
  }, [setSchools]); // Depend on setUniversities
  const skeleton = [
    1, 3, 34, 5, 343, 63, 23, 223, 3234, 234, 2343, 52342423, 23, 234324332,
    22335, 55, 2334,
  ];
  return (
    <>
      <div className="px-20 py-3 backdrop-blur-md z-10 shadow-mainbackground shadow-2xl flex fixed bg-mainbackground bg-opacity-20 top-0 w-full justify-between">
        <Link to="/">
          <motion.div whileTap={{ scale: 0.9 }} className="h-14 w-32">
            <Logo />
          </motion.div>
        </Link>
        <div className="flex items-center gap-2 rounded-full input input-bordered">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="search universities"
            className="grow"
          ></input>
        </div>
      </div>
      <div className="pt-16 bg-mainbackground font-boldm text-white  ">
        <div className=" mt-6 h-auto  ">
          <ul className="max-w-7xl mx-auto ">
            <div className="mb-6  text-2xl font-semibold flex justify-between">
              <li>University</li>
              <li>Region</li>
            </div>
            {isLoading &&
              skeleton.map((skull) => (
                <div className="skeleton  h-14  mb-9" key={skull}></div>
              ))}
            {schools.map((data) => (
              <motion.div
                className="flex py-3 justify-between gap-10 border-b-2 border-slate-500 border-opacity-20 shadow-sm  mb-3"
                key={data._id}
              >
                <li>{data.school}</li>
                <li>{data.region}</li>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SchoolsPublic;

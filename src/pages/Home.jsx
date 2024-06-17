import Navbar from "../components/SignPage/Navbar";
import SignButton from "../components/SignPage/SignButton";
// eslint-disable-next-line react/no-unescaped-entities
import Hero from "../assets/svgs/hero";
import PrimaryButton from "../components/SignPage/PrimaryButton";
const Home = () => {
  return (
    <div className="bg-mainbackground font-boldm text-white w-full h-screen overflow-hidden flex-col">
      <Navbar>
        <SignButton value={"sign up"} route={"Login"} />
      </Navbar>
      <div className="flex relative  px-[80px] py-12 h-full">
        <div className=" pt-7 relative z-50 flex flex-col  max-w-[700px]">
          <span className="pb-3  text-7xl decoration-pink-400">
            How will you shape your future?{" "}
          </span>
          <span className="mb-6 text-7xl ">
            Let's navigate your university journey together"
          </span>
          <span className="text-lg font-light mb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste,
            nam voluptates perspiciatis quae placeat est eligendi a quibusdam,
            non ipsum ex voluptate voluptatum commodi quidem asperiores soluta
            rem similique!
          </span>
          <PrimaryButton input={"search Universities"} route={"universities"} />
        </div>
        <div className="absolute h-96 z-10 right-6 top-0">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;

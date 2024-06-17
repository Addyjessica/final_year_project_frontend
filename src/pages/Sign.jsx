import Form from "../components/SignPage/Form";
import Navbar from "../components/SignPage/Navbar";
import EarthSvg from "../assets/svgs/earthPerson";
const Sign = () => {
  return (
    <div className="overflow-y-auto   font-boldm   text-slate-50 bg-mainbackground w-full h-screen">
      <Navbar></Navbar>
      <div className="relative ">
        <Form> </Form>
        <div className="h-96 w-[512px] absolute top-2 right-2 ">
          <EarthSvg />
        </div>
      </div>
    </div>
  );
};

export default Sign;

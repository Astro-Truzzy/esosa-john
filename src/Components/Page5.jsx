import { Link } from "react-router-dom";
import Img3 from "../assets/IMG-20250117-WA0037.jpg";
// import Img4 from "../assets/IMG-20250117-WA0038.jpg";

const No = "NO";
const Yes = "YES";

const Page5 = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto px-4">
        <div className="w-full max-w-lg mt-20">
          <p className="text-black text-xl md:text-2xl font-tertiary">
            <i>
              Great!{" "}
              <span>
                <b>Last question... </b>
              </span>{" "}
              in order to make N300k a Month, you&apos;ll need two things:
              <br />
              <br />
              1. A Smartphone with internet data (I guess you already have this)
              <br />
              <br />
              2. The willingness to learn, follow simple instructions, and take
              fast action.
            </i>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-4 mt-10">
        <div className="w-full max-w-xl">
          <center>
            <b>
              <h2 className="text-black text-lg md:text-2xl">Can you do that?</h2>
            </b>
          </center>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>CHOOSE YOUR ANSWER BELOW</p>
      </div>

      <div className="flex items-center justify-center w-full mt-6">
        <div className="flex items-center justify-center gap-8 w-full">
          <Link to="/pageno">
            <button className="bg-red-700 text-white hover:bg-red-500 px-4 py-2 rounded">
              {No}
            </button>
          </Link>
          <Link to="/Last">
            <button className="bg-green-700 text-white hover:bg-green-500 px-4 py-2 rounded">
              {Yes}
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-4">
        <img src={Img3} alt="Visual 1" className="w-full max-w-sm rounded"/>
        {/* <img src={Img4} alt="Visual 2" className="max-w-sm rounded"/> */}
      </div>

      <center className="mt-10">
        <p>Copyright Esosa John&apos;s Foundation 2025. All rights reserved.</p>
      </center>
    </>
  );
};

export default Page5;

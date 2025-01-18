import { Link } from "react-router-dom";
import Img2 from "../assets/IMG-20250117-WA0036.jpg";

const No = "NO";
const Yes = "YES";

const Page4 = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto px-4">
        <div className="w-full max-w-lg mt-20">
          <p className="text-white text-xl md:text-2xl font-tertiary text-center">
            <i>
              <b>Ok, good!</b> I&apos;m truly happy to hear that because what I
              have for you will definitely CHANGE YOUR LIFE.
            </i>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-4">
        <div className="w-full max-w-xl mt-10">
          <b>
            <h2 className="text-white text-lg md:text-2xl text-center">
              But... Are you willing to spend{" "}
              <span>
                <u>at most N15,000</u>
              </span>{" "}
              to start this business model?
            </h2>
          </b>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white">CHOOSE YOUR ANSWER BELOW</p>
      </div>

      <div className="flex items-center justify-center w-full mt-6">
        <div className="flex items-center justify-center gap-8 w-full">
          <Link to="/pageno">
            <button className="bg-red-700 text-white hover:bg-red-500 px-4 py-2 button rounded">
              {No}
            </button>
          </Link>
          <Link to="/page5">
            <button className="bg-green-600 text-white hover:bg-green-500 px-4 py-2 button rounded">
              {Yes}
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img src={Img2} alt="Related visual" className="w-full max-w-md rounded"/>
      </div>

      <center className="mt-10">
        <p className="text-black">Copyright Esosa John&apos;s Foundation 2025. All rights reserved.</p>
      </center>
    </>
  );
};

export default Page4;


import { Link } from "react-router-dom";
import img1 from "../assets/IMG-20250117-WA0035.jpg";

const Page1 = () => {
  const No = "NO";
  const Yes = "YES";
  
  return (
    <>
      <div className="flex items-center justify-center mx-auto px-4">
        <div className="w-full max-w-lg mt-20">
          <p className="text-white text-xl md:text-2xl font-tertiary text-center">
            <i>
              In a world where 98% of online income opportunities are scams{" "}
              <b>(this changes everything)</b>
            </i>
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full px-4">
        <div className="w-full max-w-xl relative mt-10">
          <b>
            <h2 className="text-white text-lg md:text-2xl text-center">
              Would you like to know how you can use your smartphone to{" "}
              <span>
                <u>
                  make as much as N300k monthly -{" "}
                  <span>
                    <i>LEGALLY?</i>
                  </span>
                </u>
              </span>
            </h2>
          </b>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white">CHOOSE YOUR ANSWER BELOW</p>
      </div>
      
      <div className="flex items-center justify-center w-full mt-6">
        <div className="flex items-center justify-center gap-8">
          <Link to="/pageno">
            <button className="bg-red-700 text-white hover:bg-red-500 px-4 py-2 button rounded">
              {No}
            </button>
          </Link>
          <Link to="/page2">
            <button className="bg-green-600 text-white hover:bg-green-500 px-4 button py-2 rounded">
              {Yes}
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-10 px-4">
        <img src={img1} alt="" className="max-w-full h-auto" />
      </div>

      <center className="mt-6">
        <p>
          Copyright Esosa John&apos;s Foundation 2025. All rights reserved.
        </p>
      </center>
    </>
  );
};

export default Page1;


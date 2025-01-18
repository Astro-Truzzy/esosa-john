import { Link } from "react-router-dom";

const No = "NO";
const Yes = "YES";

const Page2 = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto px-4" id="Page2">
        <div className="w-full max-w-lg mt-20">
          <p className="text-white text-xl md:text-2xl font-tertiary text-center">
            <b>OKAY!</b>
            <span>
              <i>
                {" "}
                This income opportunity requires you to do some work,{" "} just like
                any other legitimate way of making money.
              </i>
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-4">
        <div className="w-full max-w-xl mt-10">
          <b>
            <h2 className="text-white text-lg md:text-2xl text-center">
              Are you ready to put in some work?
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
          <Link to="/page3">
            <button className="bg-green-600 text-white hover:bg-green-500 px-4 py-2 button rounded">
              {Yes}
            </button>
          </Link>
        </div>
      </div>

      <center className="mt-10 p-5">
        <p className="text-white">
          Copyright Esosa John&apos;s Foundation 2025. All rights reserved.
        </p>
      </center>
    </>
  );
};

export default Page2;

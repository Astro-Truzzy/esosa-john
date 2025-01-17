import { Link } from "react-router-dom";
const No = "NO";
const Yes = "YES";

const Page2 = () => {
  return (
    <>
      <div className="flex items-center justify-center" id="Page2">
        <div className=" h-[20rem] w-[40rem] mt-[10rem]">
          <p className="text-black text-[1.8rem] font-tertiary text-center">
            <b> OKAY! </b>
            <span>
              <i>
                The income opportunity you are about to discover requires that
                you do some work just like any other legitimate way of making
                money.
              </i>
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="h-[13rem]  w-[45rem] relative bottom-[7rem]">
          <b>
            <h2 className="text-black text-[2.3rem] text-center">
              Are you ready to put in some work?
            </h2>
          </b>
        </div>
      </div>
      <div className="relative bottom-[11rem] sm:top-4rem">
        <center>
          <p> CHOOSE YOUR ANSWER BELOW </p>{" "}
        </center>
      </div>
      <div className="flex align-center justify-center w-full">
        <div className="flex align-center justify-center gap-[8rem] relative bottom-[8rem] w-full ">
          <button className="bg-red-700 text-white hover:bg-red-500">
            {No}
          </button>
          <Link to="/page3">
            <button className="bg-green-700 text-white hover:bg-green-500">
              {" "}
              {Yes}
            </button>
          </Link>
        </div>
      </div>
      <center>
        <p>
          {" "}
          Copyright Esosa John&apos;s Foundation 2025. All rights reserved.{" "}
        </p>
      </center>
    </>
  );
};

export default Page2;

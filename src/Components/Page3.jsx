import { Link } from "react-router-dom";
const No = "NO";
const Yes = "YES";

const Page3 = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto">
        <div className=" h-[20rem] w-[40rem] mt-[10rem]">
          <p className="text-black text-[1.8rem] font-tertiary text-center">
            <i>You REALLY Want This.</i>
            <i>
              <b> Great.</b>
            </i>
            <i> Next question.</i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="h-[13rem]  w-[45rem] relative bottom-[10rem]">
          <b>
            <h2 className="text-black text-[2.3rem] text-center">
              {" "}
              Can you spare at least 2 hours daily to work on your business?{" "}
            </h2>
          </b>
        </div>
      </div>
      <div className="relative bottom-[8rem] sm:top-4rem">
        <center>
          {" "}
          <p> CHOOSE YOUR ANSWER BELOW </p>{" "}
        </center>
      </div>
      <div className="flex align-center justify-center w-full">
        <div className="flex align-center justify-center gap-[8rem] relative bottom-[6rem] w-full ">
          <Link to='/pageno'> <button className="bg-red-700 text-white hover:bg-red-500 button">
            {" "}
            {No}{" "}
          </button> </Link>
          <Link to="/page4">
            {" "}
            <button className="bg-green-700 text-white hover:bg-green-500 button">
              {" "}
              {Yes}{" "}
            </button>{" "}
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

export default Page3;

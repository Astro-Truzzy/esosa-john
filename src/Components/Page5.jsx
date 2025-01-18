const No = "NO";
const Yes = "YES";
import { Link } from "react-router-dom";
const Page5 = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto">
        <div className=" h-[20rem] w-[40rem] mt-[10rem]">
          <p className="text-black text-[1.8rem] font-tertiary">
            <i>
              Great!{" "}
              <span>
                <b>Last question... </b>
              </span>{" "}
              in order to make N300k a Month, you&apos;ll need two things:{" "}
              <br />
              <br />
              1. A Smart phone with internet data ( I guess you already have
              this) <br />
              <br />
              2. The willingness to learn, follow simple instructions and take
              fast action.{" "}
            </i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="h-[14rem]  w-[45rem] relative top-[7rem]">
          <center>
            {" "}
            <b>
              <h2 className="text-black text-[2.3rem]"> Can you do that? </h2>{" "}
            </b>{" "}
          </center>
        </div>
      </div>
      <div className="relative ">
        <center>
          {" "}
          <p> CHOOSE YOUR ANSWER BELOW </p>{" "}
        </center>
      </div>
      <div className="flex align-center justify-center w-full">
        <div className="flex align-center justify-center gap-[8rem] relative top-[rem] w-full ">
          <Link to='/pageno'>
          <button className="bg-red-700 text-white hover:bg-red-500 button">
            {" "}
            {No}{" "}
          </button>
          </Link>
         <Link to='/Last'> <button className="bg-green-700 text-white hover:bg-green-500 button">
            {" "}
            {Yes}{" "}
          </button> </Link> 
        </div>
      </div>
      <div className="relative top-[1rem]">
        {" "}
        <center>
          <p>
            {" "}
            Copyright Esosa John&apos;s Foundation 2025. All rights reserved.{" "}
          </p>
        </center>
      </div>
    </>
  );
};

export default Page5;

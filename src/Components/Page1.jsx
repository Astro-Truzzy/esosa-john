import { Link } from "react-router-dom";
const Page1 = () => {
  const No = "NO";
  const Yes = "YES";
  return (
    <>
      <div className="flex items-center justify-center mx-auto">
        <div className=" h-[20rem] w-[40rem] mt-[10rem]">
          <p className="text-black text-[1.8rem] font-tertiary text-center">
            <i>
              {" "}
              In a world where 98% of online income opportunities are scams{" "}
              <b>(this changes everything)</b>
            </i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="h-[13rem]  w-[45rem] relative bottom-[10rem]">
          <b>
            <h2 className="text-black text-[2.3rem] text-center">
              {" "}
              Would you like to know how you can Use your smart phone to{" "}
              <span>
                <u>
                  {" "}
                  make as much as N300k monthly -{" "}
                  <span>
                    <i>LEGALLY?</i>
                  </span>
                </u>
              </span>{" "}
            </h2>
          </b>
        </div>
      </div>
      <div className="relative bottom-[8rem]">
        <center>
          {" "}
          <p> CHOOSE YOUR ANSWER BELOW </p>{" "}
        </center>
      </div>
      <div className="flex align-center justify-center w-full">
        <div className="flex align-center justify-center gap-[8rem] relative bottom-[6rem]">
          <Link to="/pageno">
            {" "}
            <button className="bg-red-700 text-white hover:bg-red-500 button">
              {" "}
              {No}{" "}
            </button>
          </Link>
          <Link to="/page2">
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

<div className="Img1">
  
</div>


    </>
  );
};

export default Page1;

import { Link } from "react-router-dom";

const No = "NO";
const Yes = "YES";

const Page3 = () => {
  const handleButtonClick = () => {
    if (window.fbq) {
      window.fbq('track', 'CustomEvent', { eventParam: 'value' });
    }
  };
  return (
    <>
      <div className="flex items-center justify-center mx-auto px-4">
        <div className="w-full max-w-lg mt-20">
          <p className="text-white text-xl md:text-2xl font-tertiary text-center">
            <i>You REALLY Want This.</i>
            <i>
              <b> Great.</b>
            </i>
            <i> Next question.</i>
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full px-4">
        <div className="w-full max-w-xl mt-10">
          <b>
            <h2 className="text-white text-lg md:text-2xl text-center">
              Can you spare at least 2 hours daily to work on this business?
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
            <button onClick={handleButtonClick} className="bg-red-700 text-white hover:bg-red-500 px-4 py-2 button rounded">
              {No}
            </button>
          </Link>
          <Link to="/page4">
            <button onClick={handleButtonClick} className="bg-green-600 text-white hover:bg-green-500 px-4 py-2 button rounded">
              {Yes}
            </button>
          </Link>
        </div>
      </div>

      <center className="mt-10">
        <p className="text-white">
          Copyright Esosa John&apos;s Foundation 2025. All rights reserved.
        </p>
      </center>
    </>
  );
};

export default Page3;

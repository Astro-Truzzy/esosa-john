const Last = () => {
  const handleButtonClick = () => {
    if (window.fbq) {
      window.fbq('track', 'CustomEvent', { eventParam: 'value' });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-xl bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-black text-lg md:text-xl font-tertiary">
          <i>
            <blockquote>
              Okay. <b>I am out of questions.</b> <br />
              <br />
              From your responses, it looks like you are a good fit for this
              income opportunity.
              <br />
              <br />
              Most people don&apos;t make it this far.
              <br />
              <br />
              Right now, you are going to get access to the FULL details of
              the legitimate money-making opportunity that can change your
              life.
              <br />
              
            </blockquote>
          </i>
        </p>
        <div className="mt-8">
          <button onClick={handleButtonClick} className="lastb bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-6 rounded-md transition-all duration-300">
            <a
              href="https://chat.whatsapp.com/F003wpNaVxQHAeU33RBPnU"
              className="myref"
            >
              Click Here to Join the Training
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Last;

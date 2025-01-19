import '../Components/css/Loader.css';
// eslint-disable-next-line react/prop-types
const LoadingBar = ({ progress, number }) => {
  return (
    <>
      <div className='bg-slate-500 h-[3rem] p-4'>
      <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${progress}%` }}> {number} of 5</div>
     
    </div>
      </div>
      
   
       
    </>
  )
}

export default LoadingBar;

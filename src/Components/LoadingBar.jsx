import '../Components/css/Loader.css';
let number = 1
// eslint-disable-next-line react/prop-types
const LoadingBar = ({ progress }) => {
  return (
    <>
      <div className='bg-slate-500 h-[3rem]'>
      <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${progress}%` }}> {number} of 5</div>
     
    </div>
      </div>
      
   
       
    </>
  )
}

export default LoadingBar;

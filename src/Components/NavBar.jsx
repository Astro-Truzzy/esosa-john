const NavBar = () => {
    let Comp = 'ESOSA JOHN\'S FOUNDATION';
  return (

    <div>
      <div className="">
        <div className="bg-black/20 h-[5rem] w-full flex items-center justify-center fixed z-[100] backdrop-blur-xl">
        <div className="p-4">
          <h3 className="text-primary text-[1.8rem] font-semibold font-tertiary"> {Comp} </h3>
        </div>
      </div>
        </div>  
    </div>
  );
};

export default NavBar;

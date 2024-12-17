import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
        {/* <div className='h-[4000px]'></div> */}
      </div>
    </>
  );
}

export default App;

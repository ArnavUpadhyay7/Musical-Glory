import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import Discovery from "./components/Discovery";
import Reviews from "./components/Reviews";
import Webinar from "./components/Webinar";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#141414] h-screen w-full">
      <Navbar />
      <Landing />  
      <Featured />
      <Discovery />
      <Reviews />
      <Webinar />
      <Instructors />
      <Footer />
    </div>
  )
  }


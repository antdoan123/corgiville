import "../styles/globals.css";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Notifcation from "@/components/Notifcation";
import Navbar from "@/components/navbar";

function contactus() {

  return (
    <div className="text-white bg-black ">
      <Notifcation/>
      <Navbar />
      <Contact />
      <Footer/>
    </div>
  );
}

export default contactus;
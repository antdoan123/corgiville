import Categories from "@/components/Categories";
import HeroBanner from "@/components/HeroBanner";
import Notifcation from "@/components/Notifcation";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import About from "@/components/About";

export default function HomePage() {
    return (
        <div className="text-white bg-hm ">
            <Notifcation/>
            <Navbar/>
            <HeroBanner/>
            <Categories/>
            <FeaturesSection/>
            <About/>
            <Footer/>
        </div>
    );
}
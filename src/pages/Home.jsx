import Destinations from "../component/Destination";
import Footer from "../component/footer";
import HeroSection from "../component/Hero_Section";

function Home() {
    return (
    <>
        <div>
            <HeroSection/>
            <Destinations/>
            <Footer/>
        </div>
    </>
    )
}

export default Home
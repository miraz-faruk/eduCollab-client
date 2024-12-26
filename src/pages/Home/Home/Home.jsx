import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Features from "../Features/Features";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-12 max-w-7xl mx-auto">
                <Features></Features>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;
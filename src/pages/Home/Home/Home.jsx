import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Feature from "../Feature/Feature";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-12 max-w-7xl mx-auto">
                <Feature></Feature>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;
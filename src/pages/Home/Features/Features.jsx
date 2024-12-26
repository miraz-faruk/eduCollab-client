import { useEffect, useState } from "react";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";


const Features = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch("features.json")
            .then((res) => res.json())
            .then((data) => setFeatures(data));
    }, []);

    return (
        <div className="my-12">
            <div className="text-center my-6 space-y-2 mx-32">
                <h2 className="text-4xl font-bold text-blue-600">Features</h2>
                <p className="text-gray-500">The Feature Section highlights the key functionalities or benefits of your website. It provides a quick overview of what users can expect, showcasing features in an organized and visually appealing way. Each feature is displayed using cards, making it easy for users to scan through the information.</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    features.map((feature) => {
                         return <FeatureCard key={feature.id} feature={feature}></FeatureCard>
                    })
                }
            </div>

        </div>
    );
};

export default Features;
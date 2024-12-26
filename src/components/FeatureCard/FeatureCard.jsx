import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
    return (
        <div className="card bg-base-100 w-96 border-2">
            <figure className="pt-8">
                <img
                    src={feature.icon}
                    alt="Shoes"
                    className="rounded-xl w-80 h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{feature.title}</h2>
                <p className='text-gray-500'>{feature.description}</p>
                <div className="card-actions mt-4">
                    <button className="btn bg-teal-400">Read more</button>
                </div>
            </div>
        </div>
    );
};

FeatureCard.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default FeatureCard;
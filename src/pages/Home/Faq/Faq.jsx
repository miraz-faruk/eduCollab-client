
const Faq = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-3 mx-20 mb-8">
                <h2 className="text-4xl font-bold text-blue-600">Frequently Asked Questions (FAQ)</h2>
                <h3 className="text-2xl font-semibold">Answers to common questions about EduCollab</h3>
                <p className="text-gray-500">Welcome to the FAQ section! Here, you`ll find answers to the most commonly asked questions about using EduCollab. If you have any other questions, feel free to reach out to our support team.</p>
            </div>
            <div className="mx-36 space-y-4">
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is EduCollab?</div>
                    <div className="collapse-content">
                        <p>A platform for creating, completing, and grading assignments with friends.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">How do I create an account?</div>
                    <div className="collapse-content">
                        <p>Click “Register,” fill in the details, and submit.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">How do I create an assignment?</div>
                    <div className="collapse-content">
                        <p>Log in, go to “Create Assignment,” fill in the details, and publish.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">Can I grade my friends’ assignments?</div>
                    <div className="collapse-content">
                        <p>Yes, you can grade assignments once your friends submit them.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">Is EduCollab free to use?</div>
                    <div className="collapse-content">
                        <p>Yes, it’s free to use with optional premium features.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
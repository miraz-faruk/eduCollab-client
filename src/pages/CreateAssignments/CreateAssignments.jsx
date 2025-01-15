import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const dueDate = form.dueDate.value;
        const assignment = {
            assignmentName: name,
            description: description,
            image: image,
            marks: marks,
            difficultyLevel: difficulty,
            dueDate: dueDate
        };
        console.log(assignment);

        fetch("http://localhost:3000/assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(assignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("Assignment submitted successfully!");
            }
        });

        // Clear form inputs
        // form.reset();
        setStartDate(new Date()); // Reset the date picker
    }

    return (
        <div className="my-20 max-w-7xl mx-auto">
            <div className="text-center space-y-3 mb-5">
                <h2 className="text-4xl font-bold text-blue-600">Create Assignment</h2>
                <p className="text-gray-500">Create and share assignments with your friends. Add tasks, set deadlines, <br />and collaborate easily to enhance group learning and productivity.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="number" name="marks" placeholder="Marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Assignments Difficulty Level</span>
                        </label>
                        <select name="difficulty" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select difficulty level</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Date</span>
                    </label>
                    <DatePicker name="dueDate" className="border p-3 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-teal-400">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignments;
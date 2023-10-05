import { useState } from "react"
import { useHistory } from "react-router-dom"

const AddChild = () => {
    const history = useHistory();
    const [childName, setChildName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const child = { name: childName };
        // fetch("http://localhost:8000/children", {
        fetch("https://tiny-tot-medtracker-backend.onrender.com/child_api/children", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(child)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            history.push("/parent-portal");
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error.message);
        });
    };

    return (
        <div className="add-child">
            <h2>Add a child</h2>
            <form onSubmit={handleSubmit}>
                <label>Child's name: </label>
                <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                ></input>
                <button>Add Child</button>
            </form>
        </div>
    );
}

export default AddChild;
import '../index.css'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

const AddMedication = () => {
    const [children, setChildren] = useState([]);
    const [selectedChild, setSelectedChild] = useState(null);
    const [medicationName, setMedicationName] = useState('');
    const [frequency, setFrequency] = useState('');
    const [dose, setDose] = useState('')
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedChild) {
            alert("Please select a child!");
            return;
        }
        const medication = {
            name: medicationName,
            frequency: parseFloat(frequency),
            dose: parseFloat(dose),
            child_id: parseInt(selectedChild)
        };

        fetch("http://localhost:8000/medications", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(medication)
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
            console.error("There was a problem:", error.message);
        });
    };

    useEffect(() => {
        fetch("http://localhost:8000/children")
            .then(res => res.json())
            .then(data => {
                setChildren(data);
            });
    }, []);    

    return (
        <div className="add-medication">
            <h2>Add Medication</h2>
            <form onSubmit={handleSubmit}>
                <label>Medication name:</label>
                    <input
                        type="text"
                        requrired
                        value={medicationName}
                        onChange={(e) => setMedicationName(e.target.value)}
                    />
                <label>Frequency (hours):</label>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        >
                        <option value="choose">Choose a frequency</option>
                        <option value="four">4</option>
                        <option value="six">6</option>
                        <option value="eight">8</option>
                        <option value="ten">10</option>
                        <option value="twelve">12</option>
                        {/* add option for parent to enter their own number */}
                    </select>
                    <label>Dose (mL):</label>
                    <select
                        value={dose}
                        onChange={(e) => setDose(e.target.value)}
                    >
                        <option value="choose">Choose a dose</option>
                        <option value="1.75">1.75</option>
                        <option value="5">5</option>
                        <option value="7.5">7.5</option>
                        <option value="10">10</option>
                        {/* add option for parent to enter their own number */}
                    </select>
                    <label>Add this medication to:</label>
                    <select value={selectedChild} onChange={(e) => setSelectedChild(e.target.value)}>
                        <option value="">Choose a child</option>
                        {children.map(child => (
                            <option key={child.id} value={child.id}>{child.name}</option>
                        ))}
                    </select>

                    <button>Add Medication</button>
            </form>
        </div>
    );
}

export default AddMedication;
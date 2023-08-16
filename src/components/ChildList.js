import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const ChildList = () => {
    const { id } = useParams();
    const history = useHistory();

    const [child, setChild] = useState(null);
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/children/${id}`)
        .then(res => res.json())
        .then(data => {
            setChild(data);
        });

        fetch(`http://localhost:8000/medications?child_id=${id}`)
        .then(res => res.json())
        .then(data => {
            setMedications(data);
        });
    }, [id]);

    const handleClickMedication = async (medicationId) => {
    // get current date and time
    const now = new Date();
    const updatedTimestamps = medicationId.timestamps ? [...medicationId.timestamps, now] : [now];

    // update medication with new timestamp
    await fetch(`http://localhost:8000/medications/${medicationId}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ timestamps: updatedTimestamps })
        });

        // refresh medication list
        const response = await fetch(`http://localhost:8000/medications?child_id=${id}`);
        const meds = await response.json();
        setMedications(meds);
    };

    {medications.map(medication => {
        const lastGiven = medication.timestamps && medication.timestamps.length > 0 
            ? new Date(medication.timestamps[medication.timestamps.length - 1])
            : null;
        
        const nextDose = lastGiven 
            ? new Date(lastGiven.getTime() + (medication.frequency * 60 * 60 * 1000))
            : null;
    })}

    return (
        <div className="child-list">
            <h2>{child && child.name}</h2>
            {medications.map(medication => (
                <button key={medication.id} onClick={() => handleClickMedication(medication.id)}>
                {medication.name}
                </button>
            ))}
            
            <div>
                <button onClick={() => history.push("/parent-portal")}>Back</button>
            </div>
        </div>
    );
};

export default ChildList;
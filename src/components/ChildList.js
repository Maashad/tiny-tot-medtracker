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

    const handleClickMedication = (medicationId) => {
    // log medication and display date/time given + next dose due based on frequency
    };

    return (
        <div className="child-list">
        <h2>{child && child.name}</h2>
        {medications.map(medication => (
            <button key={medication.id} onClick={() => handleClickMedication(medication.id)}>
            {medication.name}
            </button>
        ))}
        </div>
    );
};

export default ChildList;
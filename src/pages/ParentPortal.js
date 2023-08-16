// main home screen for a logged in user

import '../index.css'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';


const ParentPortal = (e) => {
    const [children, setChildren] = useState([]);
    const history = useHistory();

    const handleClickAddChild = () => {
        history.push("/add-child");
    };

    const handleClickAddMedication = () => {
        history.push("/add-medication");
    }

    const handleClickChild = (childId) => {
        history.push(`/child/${childId}`);
    };

    const handleClickMedication = (medicationId) => {
        history.push(`/medication/${medicationId}`);
    };

    useEffect(() => {
        fetch("http://localhost:8000/children")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setChildren(data);
            });
    }, []);

    return (
        <div className="parent-portal">
            {children.map(child => (
                <div key={child.id} className="button-container">
                    <button onClick={() => handleClickChild(child.id)} className="add-button">
                        {child.name}
                    </button>
                </div>
            ))}
            <div className="button-container">
                <button onClick={handleClickAddChild} className="add-button">Add Child</button>
            </div>
            <div className="button-container">
                <button onClick={handleClickAddMedication} className="add-button">Add Medication</button>
            </div>
        </div>
    );
};

export default ParentPortal;
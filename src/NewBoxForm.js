import { useState } from "react";
import './Box.css';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        id: uuid(),
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE)
    }

    return (
        <form className="box-form" onSubmit={handleSubmit}>
            <label className="Box-label" htmlFor="width">Width of Box</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="Px Wide"
                value={formData.width}
                onChange={handleChange}
            />    
            
            <label className="Box-label" htmlFor="height">Height of Box</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="Px High"
                value={formData.height}
                onChange={handleChange}
            />    
            
            <label className="Box-label" htmlFor="backgroundColor">Color of Box</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />    
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;
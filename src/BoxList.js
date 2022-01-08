import {useState} from 'react';  
import Box from "./Box";
import NewBoxForm from './NewBoxForm';
import './Box.css';

const BoxList = () => {
    const INITIAL_STATE = [
        {width: "100px", height:"100px", backgroundColor: "peachpuff"},
        {width: "100px", height:"100px", backgroundColor: "pink"}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox])
    }
    const handleRemove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };
    return (
        <div className='Box-display-field'>
            <h3>Boxes</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({width, height, backgroundColor}) => <Box width={width} height={height} backgroundColor={backgroundColor}/>)}
            </div>
        </div>
    )
}

export default BoxList;
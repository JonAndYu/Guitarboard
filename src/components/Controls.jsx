import Form from './Form';
import Instruction from './Instruction';

/*
    This will contain the forum
    
    -----------------------------
    |             |             |
    |     form    |  Instruct   |
    |-------------|             |
    |Context | BUu|             |
    -----------------------------
*/
const Controls = ({onTuningChange, currTuning}) => {
    return (
        <div className='controls'>
            <Form onTuningChange={onTuningChange} currTuning={currTuning}/>
            <Instruction />
        </div>
    )
}

export default Controls;
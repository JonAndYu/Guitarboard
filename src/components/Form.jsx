
import {useState} from 'react';

const Form = ({onTuningChange, currTuning}) => {

    const [formData, setFormData] = useState('EADGBE')

    const handleChange = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setFormData(value);
    }

    const handleSubmit = () => {
        onTuningChange(formData);
    }

    const handleReset = () => {
        onTuningChange('EADGBE');
    }

    return (
        <div className='form'>
            <form className='form--input'> 
                <label htmlFor='tuning'>Enter at most 8 of the following: (A, A#, B, C, C#, D, D#, E, F, F#, G, G#)</label>
                <input type='text' id='tuning' defaultValue = {currTuning} name='tuning' onChange={handleChange} maxLength={16}/>
            </form>
            <div className='button--container'>
                <button className='btn' onClick={handleSubmit}>Submit</button>
                <button className='btn' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Form;
import { useEffect, useState, useRef } from 'react';
import String from './String';

const Neck = ({onTuningChange, currTuning}) => {

    /*
        Run a fetch to the Fretnaut api, Since we only want to call the api when something is submitted/reset
        We should useEffect.
    */

        const [noteArray, setNoteArray] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7182/api/fretboard/notes/${currTuning}`)
            .then(response => response.json())
            .then(data => setNoteArray(data))
            .catch(error => console.error('Error:', error));
    }, [currTuning])

    return (
        <div>
          {noteArray.map((note, index) => <String elements={note} stringNumber={index} />)}
        </div>
      );
}

export default Neck;
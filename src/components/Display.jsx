import String from './guitar/String';
import Neck from './guitar/Neck';

const Display =  ({onTuningChange, currTuning}) => {
    return (
        <div className='display'>
            <Neck onTuningChange={onTuningChange} currTuning={currTuning}/>
            {/* <String elements={["A","A","A","A","A","A","A","A","A","A","A","A","A"]} stringNumber={1}/> */}
        </div>
    )
}

export default Display;
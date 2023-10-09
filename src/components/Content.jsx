
import Controls from './Controls'
import Display from './Display'
import { useState } from 'react';

const Content = () => {

  const [tuning, setTuning] = useState('EADGBE');

  return (
    <div className='content'>
      <Controls onTuningChange={setTuning} currTuning={tuning}/>
      <Display onTuningChange={setTuning} currTuning={tuning}/>
    </div>
    
  )
}

export default Content;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content'


const App = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <Navbar />
      <Content />
    </div>
    
  )
}

export default App;

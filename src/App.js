import React, { useState } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';

const styles = {
  app: `w-screen h-screen flex flex-col`,
}

function App() {
  const [selectedComponent, setSelectedComponent] = useState('terminal');

  return (
    <div className={styles.app}>
      <Navbar setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} />
      <Content selectedComponent={selectedComponent} />
    </div>
  );
}

export default App;

import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';

const styles = {
  app: `w-screen h-screen flex flex-col`,
}

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

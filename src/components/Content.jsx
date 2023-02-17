import React from 'react'
import Terminal from './Terminal'
import Commands from './Commands'
import About from './About'

const styles = {
    content: `w-full h-[100%] bg-[#393E46] flex justify-center items-center overflow-hidden`,
    terminalBorder: `w-[90%] h-[90%] bg-[#222831] rounded-2xl flex justify-center items-center`,
}

const Content = ({ selectedComponent }) => {
  return (
    <div className={styles.content}>
      <div className={styles.terminalBorder}>
        {selectedComponent === 'terminal' && <Terminal />}
        {selectedComponent === 'commands' && <Commands />}
        {selectedComponent === 'about' && <About />}
      </div>
    </div>
  )}

  export default Content

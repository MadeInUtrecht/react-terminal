import React from 'react'
import Terminal from './Terminal'

const styles = {
    content: `w-full h-[100%] bg-[#393E46] flex justify-center items-center`,
    terminalBorder: `w-[90%] h-[90%] bg-[#222831] rounded-2xl flex justify-center items-center`,
}

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.terminalBorder}>
        <Terminal />
      </div>
    </div>
  )
}

export default Content
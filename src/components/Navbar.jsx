import React from 'react'
import { BsTerminal, BsGithub } from 'react-icons/bs'

const styles = {
    navbar: `w-full h-32`,
    upperBar: `w-full h-16 bg-white flex justify-end items-center pr-8`,
    lowerBar: `w-full h-16 bg-[#00ADB5]`,
    logoDiv: `w-[15%] h-32 bg-[#00ADB5] absolute top-0 left-0 rounded-r-full flex justify-center items-center`,
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.upperBar}>
          <BsGithub size={32} />
        </div>
        <div className={styles.lowerBar}></div>
        <div className={styles.logoDiv}>
          <BsTerminal size={84} />
        </div>
    </div>
  )
}

export default Navbar
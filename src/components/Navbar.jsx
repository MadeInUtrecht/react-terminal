import React from 'react'
import { BsTerminal, BsGithub } from 'react-icons/bs'

const styles = {
    navbar: `w-full h-32`,
    upperBar: `w-full h-16 bg-white flex justify-start items-center pr-8`,
    lowerBar: `w-full h-16 bg-[#00ADB5]`,
    items: `w-[100%] h-full flex justify-start items-center space-x-8 font-bold text-2xl font-mono pl-[250px] cursor-pointer`,
    item: `hover:text-white`,
    logoDiv: `w-48 h-32 bg-[#00ADB5] absolute top-0 left-0 rounded-r-full flex justify-center items-center`,
    icons: `absolute top-5 right-5 flex justify-center items-center `,
    activeItem: `text-white border-b-2 border-white`,
}

const Navbar = ({ setSelectedComponent, selectedComponent }) => {
  const gitHub = () => {
    window.open('https://github.com/MadeInUtrecht/react-terminal', '_blank')
  }

  return (
    <div className={styles.navbar}>
        <div className={styles.upperBar}>
          <div className={styles.icons}>
            <BsGithub size={32} onClick={gitHub} className="cursor-pointer" />
          </div>
        </div>
        <div className={styles.lowerBar}>
        <div className={styles.items}>
        <h1 onClick={() => setSelectedComponent('terminal')} className={`${selectedComponent === 'terminal' ? styles.activeItem : styles.item}`}>Terminal</h1>
        <h1 onClick={() => setSelectedComponent('commands')} className={`${selectedComponent === 'commands' ? styles.activeItem : styles.item}`}>Commands</h1>
        <h1 className={styles.item}>Projects</h1>
        <h1 onClick={() => setSelectedComponent('about')} className={`${selectedComponent === 'about' ? styles.activeItem : styles.item}`}>About</h1>
          </div>
        </div>
        <div className={styles.logoDiv}>
          <BsTerminal size={84} />
        </div>
    </div>
  )
}

export default Navbar

import React, { useState, useEffect, useRef } from 'react';

const styles = {
  terminal: `w-[90%] h-[90%] rounded-2xl flex justify-start items-start md:w-[95%] font-mono text-white text-2xl p-11`,
  input: `text-2xl text-white bg-transparent outline-none focus:outline-none`,
  message: `text-base text-white`
};

const Terminal = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showCommands, setShowCommands] = useState(false);
  const [color, setColor] = useState(null);
  const inputRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const originalText =
      'Welcome...\nThis is an interactive terminal as part of a portfolio showcase project\nType "help" to see a list of commands\nType "clear" to clear the terminal\nType "exit" to close the terminal\n\n';
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(originalText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === originalText.length) {
        clearInterval(intervalId);
        inputRef.current.focus();
      }
    }, 25);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim().toLowerCase();

    if (value === 'help') {
      setShowCommands(true);
    } else if (value === 'clear') {
      setDisplayText('');
    } else if (value === 'exit') {
      window.close();
    } else if (value === 'color-red') {
      setColor('#f00');
      
    } else if (value === 'color-green') {
        setColor('#0f0');
        setDisplayText(`${displayText}> ${value}\nText color changed to green\n`);
    } else if (value === 'color-blue') {
        setColor('#00f');

    } else if (value === 'color-yellow') {
        setColor('#ff0');

    } else if (value === 'color-white') {
            setColor('#fff');

    } else {
      setDisplayText(
        `${displayText}> ${value}\nCommand "${value}" is not recognized.\n`
      );
    }

    inputRef.current.value = '';
  };

  return (
    <div className={styles.terminal} style={{ color: color }}>
      <div className={styles.welcomeText}>
        {displayText.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        {showCommands && (
          <div>
            <br></br>
            <ul>
              <li>help - show a list of commands</li>
              <li>clear - clear the terminal</li>
              <li>exit - close the terminal</li>
              <li>color-red/green/white/yellow/blue - change text color</li>
            </ul>
            <br></br>
            {color && (
              <div style={{ marginTop: '0.5rem' }}>
                Text color changed to <span style={{ color: color }}>{color}</span>
              </div>
            )}
          </div>
        )}
        <form onSubmit={handleInputSubmit}>
          <span>&gt; </span>
          <input
            ref={inputRef}
            className={styles.input}
            autoComplete="off"
            autoFocus={true}
            style={{ color: color }}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;

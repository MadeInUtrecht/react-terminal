import { useState, useEffect, useRef } from 'react';

const styles = {
  terminal: `w-[90%] h-[90%] rounded-2xl flex flex-col justify-start items-start md:w-[95%] font-mono text-white text-2xl p-11  `,
  input: `text-2xl text-white bg-transparent outline-none focus:outline-none`,
  message: ``
};

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [inputCounter, setInputCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputCounter(inputCounter + 1);
    setOutput(output => {
      const newOutput = [...output];
      if (input === 'help') {
        const helpMessage = 'help - show a list of commands\n clear - clear the terminal\n exit - close the terminal\n color-red/green/white/yellow/blue - change text color';
        const helpMessageClean = helpMessage.split('\n').map((line, index) => <p key={index}>{line}</p>);
        newOutput.push(<br></br>,input, <br></br>, <br></br>, helpMessageClean);
      } else if (input === 'clear') {
        newOutput.length = 0;
      } else if (input === 'exit') {
        window.close();
      } else if (input.startsWith('color-')) {
        const color = input.slice(6);
        const colorStyle = { color: 'white' };
        switch (color) {
          case 'red':
            colorStyle.color = '#ff5555';
            break;
          case 'blue':
            colorStyle.color = '#1e90ff';
            break;
          case 'yellow':
            colorStyle.color = '#ffff66';
            break;
          case 'green':
            colorStyle.color = '#4caf50';
            break;
        }
        newOutput.push(<p key={inputCounter} style={colorStyle}>Color changed to {color}</p>);
      } else {
        newOutput.push(<p key={inputCounter}><br></br>{input}</p>);
      }
      return newOutput;
    });
    setInput('');
  };

  useEffect(() => {
    const welcomeMessage = 'Welcome...\nThis is an interactive terminal as part of a portfolio showcase project\nType "help" to see a list of commands\nType "clear" to clear the terminal\nType "exit" to close the terminal\n\n';
    const welcomeMessageClean = welcomeMessage.split('\n').map((line, index) => <p key={index}>{line}</p>);
    setOutput([welcomeMessageClean]);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.message}>
        {output}
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
          autoFocus={true}
        />
      </form>
    </div>
  );
};

export default Terminal;

import { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  terminalBorder: `w-[100%] h-[100%] rounded-2xl flex justify-center items-center p-5`,
  terminal: `w-[100%] h-[100%] md:w-[100%] md:h-[100%] rounded-2xl flex flex-col justify-start items-start font-mono text-white text-2xl p-11 overflow-y-auto bg-[#222]`,
  input: `text-2xl text-white bg-transparent outline-none focus:outline-none`,
  message: ``

};



const TerminalTest = () => {
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
        newOutput.push(<br></br>,'>', input, <br></br>, <br></br>, helpMessageClean);
      } else if (input === 'clear') {
        newOutput.length = 0;
      } else if (input === 'exit') {
        window.close();
      } else if (input.startsWith('weather')) {
        const apiKey = 'e0196a799da31cf12346606037ede7d0';
        const city = input.split(' ')[1];
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
          .then(response => {
            const { name, main } = response.data;
            const temperature = main.temp;
            const description = main.weather[0].description;
            newOutput.push(<p key={inputCounter}>The weather in {name} is {description} and the temperature is {temperature}°C.</p>);
          })
          .catch(error => {
            newOutput.push(<p key={inputCounter}>Sorry, there was an error fetching the weather for {city}.</p>);
          });
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
          default:
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
    <div className={styles.terminalBorder}>
      <div className={styles.terminal}>
        <div className={styles.message}>
          {output}
        </div>
        <br></br>
        <form onSubmit={handleSubmit}>{'>'}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            autoFocus={true}
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalTest;

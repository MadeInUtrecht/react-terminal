import React from 'react';

const styles = {
  terminalBorder: `w-[100%] h-[100%] rounded-2xl flex justify-center items-center p-5`,
  terminal: `w-[100%] h-[100%] md:w-[100%] md:h-[100%] rounded-2xl flex flex-col justify-start items-start font-mono text-white text-2xl p-11 overflow-auto bg-[#222] `,
  input: `text-2xl text-white bg-transparent outline-none focus:outline-none`,
  message: ``,
};

const TerminalTest2 = () => {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([
    'Welcome...',
    'This is an interactive terminal as part of a showcase portfolio project',
    'Type "help" to see a list of commands',
    'Type "clear" to clear the terminal',
    'Type "portfolio" to see more of my projects',
    'Type "exit" to close the terminal',
  ]);
  const [textColor, setTextColor] = React.useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
    if (input === 'help') {
        setMessages([...messages, '-','help - show a list of commands', 'clear - clear the terminal', 'exit - close the terminal', 'color-red/green/white/yellow/blue - change text color']);
    } else if (input === 'clear') {
        setMessages(['The terminal has been cleared...']);
    } else if (input === 'exit') {
        window.close();
    } else if (input.startsWith('color-')) {
        const color = input.slice(6);
        switch (color) {
            case 'red':
                setTextColor('#ff5555');
                break;
            case 'blue':
                setTextColor('#1e90ff');
                break;
            case 'yellow':
                setTextColor('#ffff66');
                break;
            case 'green':
                setTextColor('#4caf50');
                break;
            case 'white':
                setTextColor('#ffffff');
                break;
            default:
                setTextColor('#ffffff');
                break;
        }
        setMessages([...messages, '-','Text color changed to ' + color]);
    } else if (input === 'portfolio') {
        window.open('https://www.vadimboot.com', '_blank');
    }
    else {
        setMessages([...messages, '-','Sorry, that is not a valid command']);
    }
};


  return (
    <>
    <div className={styles.terminalBorder}>
      <div className={styles.terminal}>
        {messages.map((message, index) => (
          <p key={index} style={{color: textColor}} className={styles.message}>
            {message}
          </p>
        ))}
        <br></br>
        <form onSubmit={handleSubmit}>&gt;
          <input
            className={styles.input}
            autoFocus={true}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
    </>
  );
};

export default TerminalTest2;

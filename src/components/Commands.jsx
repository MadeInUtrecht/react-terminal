import React from 'react';

const styles = {
  innerField: `w-[100%] h-[100%] bg-gray-900 rounded-2xl p-5 bg-[#222831]] flex flex-col items-center justify-center`,
};

const Commands = () => {
  const commandList = [
    'help - show a list of commands',
    'clear - clear the terminal',
    'exit - close the terminal',
    'color-red/green/white/yellow/blue - change text color',
    'weather-"cityname" - get the weather for a city',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[100%] bg-gray-900 w-[100%] rounded-2xl p-5">
      <div className={styles.innerField}>
      <h1 className="text-3xl font-bold text-white mb-10">Available Commands</h1>
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
        <ul className="divide-y divide-gray-700">
          {commandList.map((command, index) => (
            <li key={index} className="py-4 px-6">
              <p className="text-lg">{command}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Commands;

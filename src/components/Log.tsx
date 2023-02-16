import React from 'react';

interface LogProps {
  logs: string[];
}

const Log: React.FC<LogProps> = ({ logs }) => {
  return (
    <div>
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </div>
  );
};

export default Log;

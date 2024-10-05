// src/app/page.tsx

"use client";

import { useState } from 'react';
import '../app/page.module.css'; 

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.toLowerCase() === 'ameen alam') {
      setMessage(`Happy Teacher's Day, Sir Ameen Alam! Your guidance, support, and inspiration have shaped us in profound ways. Thank you for your unbelievable efforts and for teaching us different things in unique ways. You are a true leader and mentor from NIRMA QURESHIy.`);
    } else {
      setMessage(`Please enter Sir ameen alam name to generate the message.`);
    }
  };

  return (
    <div className="container">
      <div className="background">
        <h1>Happy Teacher&apos;s Day!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">Generate Message</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Home;


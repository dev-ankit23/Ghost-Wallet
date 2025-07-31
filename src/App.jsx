import React, { useState } from "react";
import "./App.css";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./components/SolanaWallet";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"; // 🠔 NEW

const App = () => {
  const [mnemonic, setMnemonic] = useState([]);

  const createMnemonic = async () => {
    const phrase = await generateMnemonic();
    setMnemonic(phrase.split(" "));
  };

  return (
    <div className="app-container">
      <h1>Ghost Wallet</h1>
      <h3 className="title">Secret Recovery Phrase</h3>

      <button className="generate-btn" onClick={createMnemonic}>
        Create Seed Phrase
      </button>

      {mnemonic.length > 0 && (
        <div className="phrase-container">
          <p className="subtitle">Save these words in a safe place.</p>
          <h2>Your Secret Phrase</h2>
          <div className="words-grid">
            {mnemonic.map((word, index) => (
              <div key={index} className="word-card">
                {word}
              </div>
            ))}
          </div>
          <SolanaWallet />
        </div>
      )}

      {/* ✅ FOOTER */}
      <footer className="footer">
        <p>
          Made by <strong>dev-ankit</strong>
        </p>
        <div className="social-links">
          <a
            href="https://x.com/ankitwt7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/devankit23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;

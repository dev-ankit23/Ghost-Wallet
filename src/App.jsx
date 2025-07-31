import { FaXTwitter, FaLinkedin } from "react-icons/fa6"; // 🠔 NEW
import { useState } from "react";
import { generateMnemonic } from "bip39";
import SolanaWallet from "./components/SolanaWallet";
const App = () => {
  const [mnemonic, setMnemonic] = useState([]);

  const createMnemonic = async () => {
    try {
      const phrase = await generateMnemonic();
      setMnemonic(phrase.split(" "));
    } catch (error) {
      console.error("Error generating mnemonic:", error);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Ghost Wallet</h1>
      <h3 style={{ textAlign: "center", color: "#666" }}>
        Secret Recovery Phrase
      </h3>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={createMnemonic}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Create Seed Phrase
        </button>
      </div>

      {mnemonic.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <p
            style={{
              textAlign: "center",
              color: "#e74c3c",
              fontWeight: "bold",
            }}
          >
            ⚠️ Save these words in a safe place. Never share them with anyone!
          </p>
          <h2 style={{ textAlign: "center" }}>Your Secret Phrase</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "10px",
              marginBottom: "20px",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            {mnemonic.map((word, index) => (
              <div
                key={index}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#666", fontSize: "12px" }}>
                  {index + 1}.{" "}
                </span>
                {word}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => copyToClipboard(mnemonic.join(" "))}
              style={{
                padding: "8px 16px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Copy Mnemonic
            </button>
          </div>

          {mnemonic.length > 0 && <SolanaWallet mnemonic={mnemonic} />}
        </div>
      )}

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          borderTop: "1px solid #eee",
          color: "#666",
        }}
      >
        <p>
          Made by <strong>dev-ankit</strong>
        </p>
        <div>
          <a
            href="https://x.com/ankitwt7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/devankit23/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            LinkedIn
          </a>
        </div>
      </footer>

      <style jsx>{`
        .wallet-section {
          margin-top: 30px;
          padding: 20px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          background-color: #f8f9fa;
        }

        .wallet-btn {
          padding: 10px 20px;
          background-color: #17a2b8;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          margin-bottom: 20px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .wallet-btn:hover {
          background-color: #138496;
        }

        .wallets-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .wallet-card {
          padding: 15px;
          background-color: white;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .key-section {
          margin: 10px 0;
        }

        .key-section label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
          color: #495057;
        }

        .key-display {
          display: block;
          padding: 8px;
          background-color: #f8f9fa;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-family: monospace;
          font-size: 12px;
          word-break: break-all;
          color: #495057;
        }

        .private-key {
          background-color: #fff3cd;
          border-color: #ffeaa7;
          color: #856404;
        }

        .error {
          color: #e74c3c;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default App;

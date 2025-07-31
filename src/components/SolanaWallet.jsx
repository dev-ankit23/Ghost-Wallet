import React, { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import bs58 from "bs58";

// Solana Wallet Component
function SolanaWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallets, setWallets] = useState([]);

  const createSOLWallet = async () => {
    if (!mnemonic) return;

    try {
      // Convert mnemonic array back to string for processing
      const mnemonicString = Array.isArray(mnemonic)
        ? mnemonic.join(" ")
        : mnemonic;

      // Await the seed generation (it's async)
      const seed = await mnemonicToSeed(mnemonicString);

      // Derive the HD path for this wallet index
      const path = `m/44'/501'/${currentIndex}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;

      // Create keypair from derived seed
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair = Keypair.fromSecretKey(secret);

      // Create wallet object with both public and private keys
      const newWallet = {
        publicKey: keypair.publicKey.toBase58(),
        privateKey: bs58.encode(keypair.secretKey),
        index: currentIndex,
      };

      console.log(`Wallet ${currentIndex + 1}:`, newWallet);

      // Update state
      setWallets([...wallets, newWallet]);
      setCurrentIndex(currentIndex + 1);
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
  };

  if (!mnemonic || mnemonic.length === 0) {
    return <p className="error">Please generate a mnemonic first!</p>;
  }

  return (
    <div className="wallet-section">
      <h3>Solana Wallets</h3>
      <button className="wallet-btn" onClick={createSOLWallet}>
        Add SOL Wallet
      </button>

      {wallets.length > 0 && (
        <div className="wallets-container">
          {wallets.map((wallet) => (
            <div key={wallet.index} className="wallet-card">
              <h4>Wallet {wallet.index + 1}</h4>
              <div className="key-section">
                <label>Public Key:</label>
                <code className="key-display">{wallet.publicKey}</code>
              </div>
              <div className="key-section">
                <label>Private Key:</label>
                <code className="key-display private-key">
                  {wallet.privateKey}
                </code>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SolanaWallet;

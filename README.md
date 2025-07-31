# 👻 Ghost Wallet

**Ghost Wallet** is a simple Solana wallet generator built with React.  
It allows users to:

- 🔐 Generate a secure 12-word seed phrase (mnemonic)
- 🪙 Derive a Solana wallet from that phrase
- 📬 Display the public key associated with the generated wallet

---

## ✨ Features

- Generates a BIP39-compliant 12-word mnemonic
- Shows the mnemonic in a clean UI (no console logging)
- Derives the Solana wallet using `@solana/web3.js`
- Displays the public key of the wallet
- Clean, dark-themed interface with social footer

---

## 🧠 How It Works

1. Click **"Create Seed Phrase"**
2. The app uses `bip39` to generate a 12-word mnemonic
3. That mnemonic is used to derive a Solana keypair
4. The public key is shown in the UI

---

## 🔗 Built With

- **React** – UI framework
- **bip39** – Seed phrase generation
- **@solana/web3.js** – Solana wallet creation
- **React Icons** – For footer icons
- **CSS** – Custom dark styling

---

## 👤 Author

Made with ❤️ by **dev-ankit**  
[X (Twitter)](https://x.com/ankitwt7) • [LinkedIn](https://linkedin.com/in/devankit23)

---

## ⚠️ Disclaimer

> This project is for learning and demonstration purposes only.  
> **Do not use it to store real funds.**

## Random String Generator
A simple and clean random string generator built with React and Tailwind CSS.

## Tech Stack
->React 19
->Tailwind CSS
->Vite

## Features
🎚️ Adjustable length slider (4 to 32 characters)
✅ Include/exclude Numbers (0-9)
✅ Include/exclude Symbols (!@#$...)
📋 One-click Copy button
🔄 Auto generates on page load
🔄 Auto regenerates when options change

🧠 React Hooks Used:
Hook          Purpose
->UseState -   Store string, length, options, copied state.
->useCallback - Memoize generate function for performance.
->useEffect  -  Auto generate on load and option change.

## ScreenShot:
[<img width="1775" height="822" alt="Screenshot 2026-06-28 095240" src="https://github.com/user-attachments/assets/bad995c0-134b-447b-aa5d-d4ddb26ac624" />]

## Run Locally
git clone https://github.com/Nikhil245207/random-string-generator.git
cd random-string-generator
npm install
npm run dev

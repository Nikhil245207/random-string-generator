import { useState, useCallback, useEffect } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false)

  const generateString = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (includeNumbers) chars += "0123456789"
    if (includeSymbols) chars += "!@#$%^&*()_+"
    let str = ""
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)]
    }
    setResult(str)
    setCopied(false)
  }, [length, includeNumbers, includeSymbols])

  useEffect(() => {
    generateString()
  }, [generateString])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="h-screen w-screen bg-green-200 flex items-center justify-center flex-col gap-y-6">
      <h1 className="text-3xl font-bold text-zinc-700">Random String Generator</h1>

      <div className="flex w-[500px] gap-x-2">
        <input
          type="text"
          value={result}
          readOnly
          className="bg-white flex-1 px-4 py-2 rounded-lg border border-zinc-700 outline-none text-lg"
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="flex items-center gap-x-4">
        <label>Length: {length}</label>
        <input type="range" min={4} max={32} value={length}
          onChange={(e) => setLength(e.target.value)} className="cursor-pointer"/>
      </div>

      <div className="flex gap-x-6">
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input type="checkbox" onChange={(e) => setIncludeNumbers(e.target.checked)}/>
          Numbers
        </label>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input type="checkbox" onChange={(e) => setIncludeSymbols(e.target.checked)}/>
          Symbols
        </label>
      </div>

      <button
        className="bg-green-600 text-white w-[500px] py-2 rounded-lg cursor-pointer text-lg"
        onClick={generateString}
      >Click</button>
    </div>
  )
}

export default App
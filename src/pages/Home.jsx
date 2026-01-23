import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <h2>Welcome to SPA</h2>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

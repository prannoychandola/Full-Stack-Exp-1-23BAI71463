import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')

  return (
    <div className="page">
      <h2>Contact</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  )
}

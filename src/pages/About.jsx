import { useEffect, useState } from 'react'

export default function About() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 5)))
  }, [])

  return (
    <div className="page">
      <h2>API Integration</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

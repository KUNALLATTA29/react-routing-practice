import React from 'react'
import { useLocation} from 'react-router-dom'

export default function NotFound() {
    const location = useLocation()
  return (
    <div>
        <p>The page at <code>{location.pathname}</code> does not exist.</p>
    </div>
  )
}

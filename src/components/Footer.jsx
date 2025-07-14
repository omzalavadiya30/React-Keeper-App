import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-center text-gray-500 py-3">
      <p>&copy; {new Date().getFullYear()} Keeper App</p>
    </footer>
  )
}

export default Footer
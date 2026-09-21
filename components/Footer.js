import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 flex items-center justify-center text-white  px-4 h-12 '>
      <p className='text-center'> Copyright &copy; {currentYear} Get me A Chai - All rights reserved</p>
    </footer>
  )
}

export default Footer

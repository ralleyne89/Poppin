import React from 'react'

function NavBar(){
    return(
        <>
        <ul className="flex p-6 shadow-lg">
  <li className="mr-6 ml-6">
    <a className="text-blue-500 hover:text-blue-800 font-bold" href="#">POPPIN</a>
  </li>
  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
  </li>
  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
  </li>
  <li className="mr-6">
    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </li>
</ul>
        </>
    )
}

export default NavBar
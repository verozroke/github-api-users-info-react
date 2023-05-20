import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
        <h3 className='font-bold'>Silchenko</h3>


        <span>
            <Link to="/" className="mr-2">Home</Link>
            <Link to="/favourites">Favourites</Link>
        </span>
      </nav>
    )
  }
}

export default Navbar
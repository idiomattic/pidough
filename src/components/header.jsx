import React from "react"
import { withRouter } from "react-router"

const Header = props => {
  let { history } = props

  return (
    <nav className='bg-white border-b-2 border-yellow-900'>
      <div className='max-w-6xl mx-auto px-4'>
        <header className='flex justify-between h-10 mt-7 mb-4'>
          <h2 className='font-bold text-3xl cursor-pointer' onClick={() => history.push({pathname: '/'})}>PiDough</h2>
        </header> 
      </div>
    </nav>
  )
}

export default withRouter(Header)
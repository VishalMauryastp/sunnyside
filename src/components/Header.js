import React from 'react'
import Logo from "./Logo"
import MenuButton from './MenuButton'

const Header = () => {
  return (
    <>
    <header className="absolute w-full flex items-center justify-between p-5">
        <div>
            <Logo/>
        </div>
        <div>
            <MenuButton/>

        </div>

    </header>
    

    </>
  )
}

export default Header
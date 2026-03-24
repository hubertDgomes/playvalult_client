import React from 'react'
import Container from '../Container'
import Images from '../Images'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
    <div className="bg-black py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center font-Jakarta font-light gap-y-6 md:gap-y-0">
          <div className="">
            <Images src={logo}/>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-4 md:gap-x-7 gap-y-3">
            <p className="cursor-pointer hover:text-white transition">Privacy Policy</p>
            <p className="cursor-pointer hover:text-white transition">Terms of Service</p>
            <p className="cursor-pointer hover:text-white transition">Cookie Settings</p>
            <p className="cursor-pointer hover:text-white transition">Contact</p>
          </div>
          <div className="text-center md:text-left mt-4 md:mt-0 text-gray-400 text-sm md:text-base">
            <p>© 2026 PLAYVAULT. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Footer
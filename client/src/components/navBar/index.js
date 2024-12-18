import React, { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import Scroll from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
function NavBar() {
    const [bol, setBol] = useState(false)
    const CloseFunc = () => {
        setBol(!bol)
    }
    let Link = Scroll.Link;
    return (
        <>
            <div className=' w-full  flex justify-between h-20 items-center px-20 ' id='Home'>
                <h1 className='text-secend font-bold cursor-pointer text-2xl border-2 text-center w-10 hover:text-forth hover:border-secend bg-third '>P.</h1>
                {/* <img className='w-20' src={require('../assets/image/logo.png')} alt="" /> */}
                <ul className='hidden md:flex'>
                    <li className='p-2 text-secend  text-lg cursor-pointer hover:text-third '>
                        <Link className='font-bold' to="home"
                            spy={true}
                            smooth={true}
                            duration={500}  >خانه</Link>
                    </li>
                    <li className='p-2 text-secend  text-lg cursor-pointer hover:text-third'>
                        <Link className='font-bold' to="about"
                            spy={true}
                            smooth={true}
                            duration={500}  >درباره ما</Link>
                    </li>
                </ul>
                <div className='block md:hidden'>
                    {!bol ? <AiOutlineMenu className='text-secend cursor-pointer' size={25} onClick={() => CloseFunc()} /> : <AiFillCloseCircle className='text-secend fixed cursor-pointer' size={25} onClick={() => CloseFunc()} />}
                </div>
                <div className={bol ? 'fixed right-0 top-0 bg-third w-[50%] border-r border-gray-900 h-full bg-black ease-in-out duration-300' : 'fixed left-[-100%]'}>
                    <h1 className='text-secend font-bold cursor-pointer text-2xl px-5 pt-3 mb-10'>P.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 text-secend font-bold  text-base cursor-pointer border-b border-gray-900 '>                        <Link className='font-bold' to="home"
                            spy={true}
                            smooth={true}
                            duration={500}  >خانه</Link></li>
                        <li className='p-4 text-secend font-bold  text-base cursor-pointer border-b border-gray-900'>                        <Link className='font-bold' to="about"
                            spy={true}
                            smooth={true}
                            duration={500}  >درباره ما</Link></li>
                    </ul>
                </div>
            </div>
            <div className='fixed hidden lg:flex flex-col space-y-1 w-[90px]  top-[40%] right-0  '>
                <a className='w-full flex items-center justify-between  mr-[-60px] hover:mr-[5px]  duration-300 text-secend' href='/'>GitHub<BsGithub className='text-secend' size={25} /></a>
                <a className='w-full flex items-center justify-between mr-[-60px] hover:mr-[5px] duration-300 text-[blue]' href='/'>LinkedIn<FaLinkedin size={25} /></a>
                <a className='w-full flex items-center justify-between mr-[-60px] hover:mr-[5px] duration-300 text-[red]' href='/'>Mail<AiTwotoneMail className='' size={25} /></a>
            </div>
        </>
    )
}
//  
export default NavBar
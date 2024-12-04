"use client"
import React, { useState } from 'react'
import { Image } from '@nextui-org/react'
import './style.css'

function Nav() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <nav>
                {isSidebarVisible && (
                    <ul className='sidebar'>
                        <li onClick={toggleSidebar} className='flex items-center'>
                            <a>
                                <Image
                                    src='/images/SOne_Mobile_menu.png'
                                    className='menu-icon'
                                    radius='none'
                                    alt='icon' />
                            </a>
                        </li>
                        <li><a href='#'>โปรโมชั่น</a></li>
                        <li><a href='#'>ข่าวและกิจกรรม</a></li>
                        <li><a href='#'>เคล็ดลับความปลอดภัย</a></li>
                        <li><a href='#'>คำถามที่พบบ่อย</a></li>
                        <li><a href='#'>เกี่ยวกับเรา</a></li>
                        <li><a href='#'>หางาน</a></li>
                        <li><a href='#'>ติดต่อเรา</a></li>
                        <li><a href='#'>แผนผังเว็บไซต์</a></li>
                        <span className="flex h-[50px] items-center pl-[2vh] gap-2">
                            <Image className="cursor-pointer" src="/images/SOne_index_iconeng.jpg" width={25} height={25} alt="icon"></Image>
                            <Image className="cursor-pointer" src="/images/SOne_index_iconthai.jpg" width={25} height={25} alt="icon"></Image>
                        </span>
                    </ul>
                )}
                <ul className='navbar'>
                    <li className='showOn' onClick={toggleSidebar}>
                        <a>
                            <Image
                                src='/images/SOne_Mobile_menu.png'
                                className='menu-icon'
                                width={25} height={25}
                                radius='none'
                                alt='icon' />
                        </a>
                    </li>
                    <li className='hideOn'><a href='#'>โปรโมชั่น</a></li>
                    <li className='hideOn'><a href='#'>ข่าวและกิจกรรม</a></li>
                    <li className='hideOn'><a href='#'>เคล็ดลับความปลอดภัย</a></li>
                    <li className='hideOn'><a href='#'>คำถามที่พบบ่อย</a></li>
                    <div className="endContent">
                        <li><a>
                            <Image
                                src='/images/SOne_index_btfacebook1.png'
                                width={20} height={20}
                                radius='none'
                                alt='icon' /></a></li>
                        <li><a>
                            <Image
                                src='/images/SOne_index_bttwitter1.png'
                                width={20} height={20}
                                radius='none'
                                alt='icon' /></a></li>
                        <li><a>
                            <Image
                                src='/images/SOne_index_btyoutube1.png'
                                width={20} height={20}
                                radius='none'
                                alt='icon' /></a></li>
                        <li className='showOn'><a>
                            <Image
                                src='/images/SOne_Mobile_search.png'
                                width={20} height={20}
                                radius='none'
                                alt='icon' /></a></li>
                    </div>

                </ul>
            </nav>
        </>
    )
}

export default Nav
"use client"
import React from 'react'
import Image from "next/image";
import Nav from "@/Components/navbar/Nav"
import './style.css'

function LayerTop() {
  return (
    <>
      <div className="layoutTop">
        <Image src="/images/SOne_index_logo.png" width={300} height={300} alt="logo"></Image>

        <div className="justify-center text-[16px]">
          <span className="changeL">
            <Image src="/images/SOne_index_iconeng.jpg" width={25} height={25} alt="icon"></Image>
            <Image src="/images/SOne_index_iconthai.jpg" width={25} height={25} alt="icon"></Image>
          </span>
          <div className="router">
            <span>
              <input placeholder="ค้นหา..."></input>
              <Image className="icon" src="/images/SOne_Mobile_search.png" width={25} height={25} alt="icon" />
            </span>
            <p className="cursor-pointer">เกี่ยวกับ S-ONE | หางาน | ติดต่อเรา | แผนผังเว็บไซต์ </p>
          </div>
        </div>
        <div className='col-span-2'>
          <Nav />
        </div>
      </div>
      <div className='showOn mt-2'>
        <Nav />
        <Image 
        className='w-full px-[25%]' 
        src="/images/SOne_index_logo.png" 
        width={300} height={300} alt="logo"></Image>
      </div>
    </>
  )
}

export default LayerTop
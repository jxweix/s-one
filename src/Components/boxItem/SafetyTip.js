import { Image } from '@nextui-org/react'
import React from 'react'

function SafetyTip({ text }) {
    return (
        <>
            <span className='Safety'>
                <Image src='/images/SOne_index_tips1.png' height={125} radius='none' alt='left' />
                <span className='flex h-[117px] items-center text-center text-white bg-[#252525] border-y-1 border-r-1 border-[#f05a28] leading-none'>
                    <h5>“</h5>
                    <span>
                        <h3>Safety Tip</h3>
                        <p>{text}</p>
                    </span>
                    <h5>”</h5>
                </span>
            </span>
            <div className='customInput '>
                <p>ส่งข้อความหาเรา</p>
                <input  placeholder='กรุณาใส่อีเมล' />
                <Image className='border-1 border-[#f05a28]' src='/images/SOne_index_btgo.jpg' height={30} radius='none' />
            </div>
            <div className='mt-[1vh] pt-[1vh] border-t-1 border-dashed border-[#f05a28]'>
                <Image src='/images/SOne_index_call.png' />
            </div>
        </>
    )
}

export default SafetyTip
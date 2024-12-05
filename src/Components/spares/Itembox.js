import React from 'react'
import { Image } from '@nextui-org/react'

function Itembox() {
    const items = [
        'SOne_index_bt-tire',
        'SOne_index_bt-break',
        'SOne_index_bt-battery',
        'SOne_index_bt-chokeup',
        'SOne_index_bt-oil',
        'SOne_index_bt-guarantee'
    ]
    return (
        <div className='flex flex-col sm:flex-col md:flex-row items-center content-center gap-2 md:gap-0 md:space-x-2'>
            {items.map((item, index) => (
                <div key={index} 
                className="items-center grow bg-[#f05a28] w-full flex justify-center">
                    <Image src={`/images/${item}.jpg`} radius='none' alt='icon' />
                </div>
            ))}
        </div>
    )
}

export default Itembox
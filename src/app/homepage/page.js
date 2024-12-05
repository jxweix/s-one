import React from 'react'
import './style.css'
import Rubber from '@/Components/rubber/Rubber';
import BoxSelect from '@/Components/boxSelect/BoxSelect';
import SlideImage from '@/Components/banner/SlideImage';
import Itembox from '@/Components/spares/Itembox';

const page = () => {
    return (
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-[8px] sm:pb-0 sm:grid-cols-2 grid-cols-1 '>
                <div className='justify-items-center py-2'>
                    <Rubber />
                </div>
                <SlideImage />
            </div>
            <div>
                <Itembox />
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 pb-2 grid-cols-1 '>
                <div className='justify-items-center py-2'>
                    <BoxSelect />
                </div>
            </div>
        </div>
    )
}

export default page
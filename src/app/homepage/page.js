import React from 'react'
import './style.css'
import Rubber from '@/Components/rubber/Rubber';
import BoxSelect from '@/Components/boxSelect/BoxSelect';
import SlideImage from '@/Components/banner/SlideImage';
import Itembox from '@/Components/spares/Itembox';
import NewEvent from '@/Components/boxItem/NewEvent';
import SafetyTip from '@/Components/boxItem/SafetyTip';

const page = () => {
    return (
        <div className='container'>
            <div className='grid md:grid-cols-3 mb-[8px] md:mb-0 sm:pb-0 sm:grid-cols-2 grid-cols-1 gap-0 md:gap-2'>
                <div className='justify-items-center py-2 col-span-2 md:col-span-1'>
                    <Rubber />
                </div>
                <SlideImage />
            </div>
            <div>
                <Itembox />
            </div>
            <div className='grid gap-2 md:grid-cols-4 sm:grid-cols-2 pb-2 grid-cols-1 '>
                <div className='justify-items-center py-2'>
                    <BoxSelect />
                </div>
                <div className='py-2 col-span-2'>
                    <NewEvent />
                </div>
                <div className='sm:col-start-2 sm:row-start-1 md:col-start-4 md:row-start-1 justify-items-center content-center py-2'>
                    <SafetyTip text={'เติมน้ำมันด้วยนะจ๊ะ'} />
                </div>
            </div>
        </div>
    )
}

export default page
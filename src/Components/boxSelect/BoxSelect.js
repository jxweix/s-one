import React from 'react'
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import './style.css'
import { Image, Select } from '@nextui-org/react';

function Map() {
    return (
        <div>
            <Card className='cardCustom'>
                <CardHeader className='py-0 text-white text-[21px]'>ค้นหาศูนย์บริการใกล้คุณ</CardHeader>
                <CardBody className='customMap'>
                    <div className='grid  grid-rows-[125px_50px]'>
                        <div className='text-black'>
                            <Select classNames={{ label: 'text-white text-[18px] w-full text-right' }} size='sm' label='จังหวัด' labelPlacement='outside-left' color='default' radius='none' placeholder='-กรุณาเลือก-' />
                            <Select classNames={{ label: 'text-white text-[18px] w-full text-right' }} size='sm' label='อำเภอ' labelPlacement='outside-left' color='default' radius='none' placeholder='-กรุณาเลือก-' />
                            <Select classNames={{ label: 'text-white text-[18px] w-full text-right' }} size='sm' label='ตำบล' labelPlacement='outside-left' color='default' radius='none' placeholder='-กรุณาเลือก-' />
                        </div>
                        <div className='flex h-full px-[2vh] justify-items-center items-center'>
                            <div className='grow justify-items-center'>
                                <Image
                                    src='/images/SOne_index_search.png'
                                    radius='none'
                                    width={120} height={25}
                                    alt='button'
                                />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Map
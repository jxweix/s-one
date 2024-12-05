import React from 'react'
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import './style.css'
import { Image, Select } from '@nextui-org/react';

function Rubber() {
    return (
        <div>
            <Card className='cardCustom'>
                <CardHeader className='px-2 py-0 text-white text-[21px]'>ค้นหายาง</CardHeader>
                <CardBody className='custom'>
                    <div className='grid grid-cols-3 grid-rows-[228px_50px]'>
                        <div className='col-start-2 col-span-2 text-black'>
                            <h5>หน้ายาง</h5>
                            <p>ความกว้าง (มม.)</p>
                            <Select className='border-[black]' size='sm' color='default' radius='none' placeholder='-กรุณาเลือก-' />
                            <h5>ซีรี่ย์</h5>
                            <p>อัตราส่วนความสูงแก้มยาง (%)</p>
                            <Select size='sm' color='default' radius='none' placeholder='-กรุณาเลือก-' />
                            <h5>กะทะล้อ</h5>
                            <p>เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                            <Select size='sm' color='default' radius='none' placeholder='-กรุณาเลือก-' />
                        </div>
                        <div className='flex h-full px-[2vh] items-center col-start-2 col-span-2'>
                            <Image
                                src='/images/SOne_index_search.png'
                                radius='none'
                                width={120} height={25}
                                alt='button'
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Rubber
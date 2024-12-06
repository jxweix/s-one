import React from 'react'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import './style.css'

function NewEvent() {
    const setting = {
        base: 'max-h-[231px] h-full border-1 rounded-none border-[#f05a28]',
        header: 'border-b-1 border-[#f05a28] text-[21px] h-[31.5px]',
    }

    const imgMap = [
        'SOne_index_news_23.jpg',
        'tips_01.jpg',
        'tips_02.jpg'
    ]

    return (
        <div>
            <Card classNames={setting}>
                <CardHeader>
                    <p>ข่าว & กิจกรรมใหม่</p>
                </CardHeader>
                <CardBody>
                    <div className='BoxEvent'>
                        {imgMap.map((item, i) => (
                            <div className='ItemEvent' key={i}>
                                <span className='w-[45px] z-50 text-[18px] text-center leading-none absolute text-white bg-black opacity-75'>
                                    <p>19<br />Nov<br />2019</p>
                                </span>
                                <Image radius='none' src={`/images/${item}`} width={250} height={130} alt='photo' />
                                <p>เกรดความรู้ ที่ต้องอ่าน</p>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div >
    )
}

export default NewEvent
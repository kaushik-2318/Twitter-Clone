import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'

const FeedCard: React.FC = () => {
    return (
        <div className='border border-[#2f3336] p-5 cursor-pointer border-r-0 border-l-0 border-t-0'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image src='https://avatars.githubusercontent.com/u/111528187?v=4' alt='user-image' height={50} width={50} />
                </div>
                <div className='col-span-11'>
                    <h5>Kaushik Verma</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi minima corrupti tempore aperiam, voluptate harum quod atque voluptas officia assumenda sed doloremque obcaecati, ipsum sequi. Excepturi soluta a nulla!
                    </p>
                    <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <AiOutlineRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeedCard
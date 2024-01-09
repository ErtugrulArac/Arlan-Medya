import React from 'react'

const email = () => {
    return (
        <div>
            <div className=' border-solid border border--600sky border-black mt-7  w-[30%] m-auto flex  justify-end rounded-[50px] bg-white'>
                <input className='  text-base outline-none px-4 font-fontum rounded-[50px] w-[100%]' placeholder='
        E mail adresini girniz' type="text" />
                <a className='rounded-[50px] py-3 px-9 bg-black text-stone-50 font-fontum text-nowrap ' href="">ABONE OL</a>
            </div>
        </div>
    )
}

export default email
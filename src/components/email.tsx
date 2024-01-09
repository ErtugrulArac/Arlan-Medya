import React from 'react'

const email = () => {
    return (
        <div>
            <div className=' border-solid border border--600sky border-black mt-7  w-[30%] max-2xl:w-[35%] max-xl:w-[40%] max-lg:w-[50%] max-md:w-[60%]
            max-sm:w-[90%] m-auto flex  justify-end rounded-[50px] bg-white'>
                <input className='  text-base max-sm:text-sm outline-none px-4 font-fontum rounded-[50px] w-[100%]' placeholder='
        E mail adresini giriniz' type="text" />
                <a className='whitespace-nowrap rounded-[50px] py-3 px-9 bg-black text-stone-50 font-fontum text-nowrap max-sm:text-sm' href="">ABONE OL</a>
            </div>
        </div>
    )
}

export default email
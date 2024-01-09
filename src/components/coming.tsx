import React from 'react'
import Email from '@/components/email'
import Logolar from "@/components/logolar"




const coming = () => {
    return (
        <div className='arkaplan flex justify-center items-center bg-black w-[100%] '>
            <div className='w-[60%] max-xl:w-[80%] max-lg:w-[85%] max-md:w-[90%] py-10 max-sm:py-1  bg-white rounded-[50px]'>
                <div className='flex justify-center '>
                    <div>
                        <img className='w-40 max-sm:w-32' src="/logo.png" alt="" />
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <h1 className=" text-7xl text-center max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-fontum font-bold   yakında">
                        ÇOK YAKINDA SİZLERLE...{" "}
                    </h1>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <h3 className=" mt-11 text-lg w-[50%] max-xl:w-[70%] max-lg:w-[75%] max-md:w-[78%] max-lg:text-base max-md:text-sm  text-center m-5 text-black font-fontum">
                            Arlan Medya olarak sizlere heyecan verici bir haberimiz var!
                            Web sitemiz şu anda yeniden
                            yapılanma sürecinde ve çok yakında sizlerle buluşacak. Yeniliklerle
                            dolu bu süreçte, sitemizi daha kullanıcı dostu, bilgi dolu ve
                            etkileşimli hale getirmek için Arlan Medya ekibi olarak çalışıyoruz. Bu süreçte Arlan Medya'ya
                            gösterdiğiniz sabır için teşekkür ederiz. <br /> Arlan Medya yeni ve güçlü içeriklerle,
                            kullanıcı dostu arayüzle ve daha fazla özellikle karşınıza çıkmak için
                            sabırsızlanıyor. Anlayışınız ve destekleriniz için teşekkür ederiz. Arlan Medya...
                        </h3>
                    </div>
                </div>
                <Email />
                <Logolar />
            </div>

        </div>
    )
}

export default coming
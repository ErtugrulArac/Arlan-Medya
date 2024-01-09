import React from 'react'
import Email from '@/components/email'
import Logolar from "@/components/logolar"




const coming = () => {
    return (
        <div className='arkaplan flex justify-center items-center bg-black w-[100%] h-[100vh]'>
            <div className='w-[60%] py-10  bg-white rounded-[50px]'>
                <div className='flex justify-center '>
                    <div>
                        <img className='w-40' src="logo.png" alt="" />
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <h1 className=" text-7xl font-fontum font-bold   yakında">
                        ÇOK YAKINDA SİZLERLE...{" "}
                    </h1>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <h3 className=" mt-11 text-[15px] w-[50%]  text-center m-5 text-black font-fontum">
                            Arlan Medya olarak sizlere heyecan verici bir haberimiz var!
                            <h3>Web sitemiz şu anda yeniden
                                yapılanma sürecinde ve çok yakında sizlerle buluşacak. Yeniliklerle
                                dolu bu süreçte, sitemizi daha kullanıcı dostu, bilgi dolu ve
                                etkileşimli hale getirmek için Arlan Medya ekibi olarak çalışıyoruz. Bu süreçte Arlan Medya için
                                gösterdiğiniz sabır için teşekkür ederiz. <br /> Arlan Medya yeni ve güçlü içeriklerle,
                                kullanıcı dostu arayüzle ve daha fazla özellikle karşınıza çıkmak için
                                sabırsızlanıyor.Anlayışınız ve destekleriniz için teşekkür ederiz.</h3>
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
import Image from 'next/image'
import Coming from "@/components/coming"
import Footer from "@/components/footer"
import Wp from "@/components/wpbutton"


export default function Home() {
  return (

    <div>
      <Coming />
      <Footer/>
      <Wp/>
    </div>

  )
}

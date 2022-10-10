import Image from 'next/image'
import Layout from '../components/Layout'
import { FaceSmileIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline"
import OptionCard from '../components/OptionCard'

export default function Home() {

  const options = [
    {
      title: "Self",
      icon: <UserIcon className='w-6 h-6' />,
      info: "filler filler filler filler filler filler filler"
    },
    {
      title: "Mind",
      icon: <FaceSmileIcon className='w-6 h-6' />,
      info: "filler filler filler filler filler filler filler"
    },
    {
      title: "Body",
      icon: <HeartIcon className='w-6 h-6' />,
      info: "filler filler filler filler filler filler filler"
    }
  ]

  return (
    <div>
      <main className='relative h-screen'>
        <Image src='/beach-bg.jpg' layout='fill' className='absolute z-0' />
        <div className='absolute w-full h-screen bg-black/30 z-20 backdrop-blur-sm' />
        <Layout>
          <div className='h-full relative grid place-items-center'>
            <div className='flex flex-col md:flex-row gap-8 items-center md:gap-0 md:justify-between md:max-w-[50%] w-full mx-auto'>
              {options.map((option) => (
                <OptionCard option={option} />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </div>
  )
}

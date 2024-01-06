import Image from 'next/image'

export default function Avatar() {
  return <Image src="/avatar.jpeg" alt="avatar" width="44" height="64" className='rounded-full ml-5'/>
}
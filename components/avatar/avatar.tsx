import Image from 'next/image'
import classes from './avatar.module.css'

const Avatar = ({ src }) => {
  const { avatar } = classes
  return (
    <div className={avatar}>
      <Image src={src} alt='avatar' style={{ objectFit: 'cover' }} />
    </div>
  )
}

export default Avatar

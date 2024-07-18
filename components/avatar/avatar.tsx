import Image from 'next/image'
import classes from './avatar.module.css'

const Avatar = ({ size = '100%', src }) => {
  const { avatar } = classes
  return (
    <div className={avatar} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt='avatar'
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default Avatar

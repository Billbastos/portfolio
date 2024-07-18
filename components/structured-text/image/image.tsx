import NextImage from 'next/image'
import classes from './image.module.css'

const Image = ({ record }) => {
  const { image } = classes
  return (
    <div
      className={image}
      style={{
        maxHeight: `calc((640px * ${record.image.height}) / ${record.image.width})`,
      }}
    >
      <NextImage
        src={record.image.url}
        alt={record.id}
        width={record.image.width}
        height={record.image.height}
        style={{
          width: '640px',
          height: `${(640 * record.image.height) / record.image.width}px`,
        }}
      />
    </div>
  )
}

export default Image

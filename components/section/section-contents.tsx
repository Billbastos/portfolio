import Image from 'next/image'
import classes from './section-contents.module.css'

const resizeImage = (image) => {
  const { width, height } = image
  if (width > height && width > 480) {
    return {
      width: 480,
      height: (480 / width) * height,
    }
  } else if (width < height && height > 480) {
    return {
      width: (480 / height) * width,
      height: 480,
    }
  }
  return { width, height }
}

const SectionContents = ({
  image,
  title,
  reverse = false,
  isLinkHovered = false,
  ...rest
}) => {
  const {
    contents,
    'reverse-content': reversed,
    'link-hovered': linkHovered,
  } = classes
  const { width, height } = resizeImage(image)
  return (
    <section
      className={`${contents} ${reverse && reversed} ${
        isLinkHovered && linkHovered
      }`}
    >
      <picture>
        <Image
          src={image.src}
          alt={title}
          style={{ objectFit: 'fill' }}
          width={width}
          height={height}
          priority
          {...rest}
        />
      </picture>
    </section>
  )
}

export default SectionContents

import Image from 'next/image'
import classes from './section-contents.module.css'

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
          style={{ objectFit: 'cover' }}
          width={image.width}
          height={image.height}
          priority
          {...rest}
        />
      </picture>
    </section>
  )
}

export default SectionContents

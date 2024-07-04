'use client'
import Button from '../button/button'
import { FaArrowRight } from 'react-icons/fa'
import classes from './section-copy.module.css'

const SectionCopy = ({
  title,
  description,
  url,
  link,
  setIsHovered = (_: boolean) => {},
}) => {
  const { wrapper, heading } = classes
  return (
    <section className={wrapper}>
      <h2 className={heading}>{title}</h2>
      <p>{description}</p>
      <Button
        href={url}
        as='a'
        variant='link'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {link}
        <FaArrowRight />
      </Button>
    </section>
  )
}

export default SectionCopy

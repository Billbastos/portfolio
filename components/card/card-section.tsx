import classes from './card-section.module.css'
import CardGroup from './card-group'
import Card from './card'
import Button from '../button/button'
import { FaArrowRight } from 'react-icons/fa'

const CardSection = ({
  cards,
  title,
  buttonTitle,
  buttonLink,
}) => {
  const { section, link, wrapper } = classes
  return (
    <div
      className={wrapper}
    >
      <div className={section}>
        <h1>{title}</h1>
        <CardGroup size={cards.length}>
          {cards.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </CardGroup>
      </div>
      <Button variant='link' href={buttonLink} className={link} as='a'>
        {buttonTitle} <FaArrowRight />
      </Button>
    </div>
  )
}

export default CardSection

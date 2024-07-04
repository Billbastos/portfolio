import classes from './card-group.module.css'

const CardGroup = ({ children }) => {
  const { wrapper } = classes
  return <div className={wrapper}>{children}</div>
}

export default CardGroup

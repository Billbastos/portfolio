import classes from './card-group.module.css'

const CardGroup = ({ size, children }) => {
  const { wrapper } = classes
  return (
    <div
      className={wrapper}
      style={{ gridTemplateColumns: Array(size).fill('auto').join(' ') }}
    >
      {children}
    </div>
  )
}

export default CardGroup

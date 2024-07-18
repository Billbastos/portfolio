import classes from './tag.module.css'

const Tag = ({ color = `var(--palette-grey-100)`, children }) => {
  const { tag, text: tagText } = classes
  return (
    <div className={tag} style={{ borderColor: color }}>
      <span className={tagText} style={{ color }}>
        {children}
      </span>
    </div>
  )
}

export default Tag

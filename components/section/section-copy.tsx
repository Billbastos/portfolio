import classes from './section-copy.module.css'

const SectionCopy = ({ children }) => {
  const { wrapper } = classes
  return <section className={wrapper}>{children}</section>
}

export default SectionCopy

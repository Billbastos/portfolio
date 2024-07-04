import classes from './section-group.module.css'
const SectionGroup = ({ reverse = false, children }) => {
  const { wrapper, reversed } = classes
  return (
    <section className={`${wrapper} ${reverse && reversed}`}>
      {children}
    </section>
  )
}

export default SectionGroup

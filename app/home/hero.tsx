import classes from './hero.module.css'

const Hero = () => {
  const { hero, content, wrapper } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>What is this portfolio about?</h1>
          <p>
            My portfolio highlights both my technical expertise and creativity.
            It features blog posts on various tech topics, along with game
            development ideas that showcase my approach to designing fun and
            immersive experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

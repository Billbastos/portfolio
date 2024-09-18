import classes from './hero.module.css'

const Hero = () => {
  const { hero, content, wrapper } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>Bio</h1>
          <p>
            Result-driven Senior Software Engineer with over 10 years of
            extensive experience in software development and building robust
            solutions across a variety of platforms and industries. Adept at
            leading projects from conception to deployment, utilizing a vast
            array of programming tools and a track record of integrating
            user-centric design and backend functionalities. Passionate about
            leveraging innovative technologies to drive business growth, enhance
            user experience, and streamline operations in fast-paced, agile
            environments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

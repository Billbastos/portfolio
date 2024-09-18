import Avatar from '@/components/avatar/avatar'
import classes from './hero.module.css'
import avatarGif from './assets/gui-about-animation.gif'

const Hero = () => {
  const { hero, content, avatar, wrapper } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>About</h1>
          <p>
            Hi, I'm Gui. I'm about to start Game Development continuing studies
            at Emily Carr. I hold a diploma in Software Engineering from both
            PUC and Mackenzie. I have over 3 years of experience as a Senior
            Software Engineer at Segment, and much more experience working for
            various other companies. However, my passion has always been game
            development, and I'm excited to embark on this new journey. I enjoy
            working on diverse projects as they push me to explore new
            technologies, collaborate with different teams, and continually grow
            and learn.
          </p>
        </div>
        <div className={avatar}>
          <Avatar src={avatarGif} />
        </div>
      </div>
    </div>
  )
}

export default Hero

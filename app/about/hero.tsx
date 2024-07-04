import Avatar from '@/components/avatar/avatar'
import classes from './hero.module.css'
import avatarImg from './assets/gui-2.png'

const Hero = () => {
  const { hero, content, avatar, wrapper } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>About</h1>
          <p>
            I'm an independent gameplay and tools engineering contractor,
            currently based in Edinburgh, UK. I work with a wide variety of
            clients, from individuals looking for someone to build their dream
            game to independent studios and startups that need a talented
            professional to help to develop their projects. I graduated from
            Mackenzie: Industrial Design, and have commercial AAA programming
            experience working as an Online Tools Designer at Segment. As an
            independent contractor, I take a lot of joy in being able to
            continually work on a variety of different projects as it forces me
            to interact with new technologies, work with new people and
            consistently allow me to keep growing and learning...
          </p>
        </div>
        <div className={avatar}>
          <Avatar src={avatarImg} />
        </div>
      </div>
    </div>
  )
}

export default Hero

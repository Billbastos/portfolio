import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './about.module.css'
import { getPosts } from '@/lib/queries'

const AboutPage = async () => {
  const posts = await getPosts()
  const { wrapper, heading } = classes
  return (
    <>
      <Hero />
      <main className={wrapper}>
        <section>
          <h2 className={heading}>Experiences</h2>
          <p>
            Over the years, I've worked on exciting projects across my career.
            At Twilio/Segment, I led the development of a design system, built
            reusable React/NextJS components, and implemented a
            GDPR/CCPA-compliant consent management solution. I also increased
            user signups by 300% with a new marketing page.
          </p>
          <p>
            At Global Relay, I developed a web messaging app with React and
            automated workflows. At Central 1, I led key projects like Vancity's
            Visa Alerts and improved online banking solutions.
          </p>
          <p>
            Earlier, at Unimed do Brasil, I revamped a nationwide appointment
            system and led a UX redesign. Now, I’m excited to dive into game
            development!
          </p>
        </section>
        <section>
          <h2 className={heading}>Skills</h2>
          <p>
            I specialize in front-end programming, working extensively with
            technologies like React and TypeScript to create dynamic,
            user-friendly interfaces.
          </p>
          <p>
            I’m also familiar with design tools like Figma and Photoshop, which
            help me bring a creative edge to my work. I thrive in collaborative
            environments, enjoying teamwork and contributing to shared goals.
          </p>
          <p>
            {' '}
            Currently, I’m also diving into game development, expanding my
            skills and exploring new creative possibilities.
          </p>
        </section>
        <section>
          <h2 className={heading}>Hobbies</h2>
          <p>
            In my free time, I love diving into comics, especially classic ones
            with rich stories and bold artwork. I also enjoy playing retro video
            games, which take me back to simpler times with their nostalgic
            graphics and gameplay.
          </p>
          <p>
            On the creative side, I like building things at home—whether it’s
            DIY projects or tinkering with gadgets, I’m always working on
            something hands-on.
          </p>
        </section>
      </main>
      <CardSection
        cards={posts}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}

export default AboutPage

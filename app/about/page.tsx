import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './about.module.css'
import { getPosts } from '@/lib/queries'

const AboutPage = async () => {
  const posts = await getPosts()
  const { wrapper } = classes
  return (
    <>
      <Hero />
      <main className={wrapper}>
        <section>
          <h2>Experiences</h2>
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
        </section>
        <section>
          <h2>Skills</h2>
          <p>
            I'm an independent gameplay and tools engineering contractor,
            currently based in Edinburgh, UK. I work with a wide variety of
            clients, from individuals looking for As an independent contractor,
            I take a lot of joy in being able to continually work on a variety
            of different project.
          </p>
        </section>
        <section>
          <h2>Hobbies</h2>
          <p>
            I'm an independent gameplay and tools engineering contractor,
            currently based in Edinburgh, UK. I work with a wide variety of
            clients, from individuals looking for As an independent contractor,
            I take a lot of joy in being able to continually work on a variety
            of different project.
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

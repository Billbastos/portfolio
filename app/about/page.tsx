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
            Over the years, I've had the chance to work on some pretty exciting
            projects. At Twilio/Segment, I led the charge on speeding up website
            development with a slick design system, built reusable React/NextJS
            components, and rolled out a consent management solution to keep
            things GDPR/CCPA-compliant. I even boosted user signups by over 300%
            with a killer marketing page! Before that, at Global Relay, I
            developed a web messaging app, setting up React components and
            automating workflows, saving tons of time. At Central 1, I
            spearheaded key projects like Vancity's Visa Alerts and enhanced
            online banking solutions. Going further back, at Unimed do Brasil, I
            revamped a nationwide appointment system and led UX redesign
            efforts, making the platform much more efficient and user-friendly.
            Now, I’m stoked to dive headfirst into game development and see
            where this new chapter takes me!
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

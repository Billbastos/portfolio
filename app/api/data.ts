import ogresJPG from './assets/ogres.jpg'
import peopleJPG from './assets/people.jpg'
import weaponsJPG from './assets/weapons.jpg'

import characterJPG from './assets/character.jpg'
import terrainsJPG from './assets/terrains.jpg'
import villageGIF from './assets/village.gif'

export const news = [
  {
    id: 1,
    title: 'New Course Released',
    image: ogresJPG,
    link: '/blog/new-course-released',
    description:
      'We have just released our latest course on NextJS. Check it out!',
  },
  {
    id: 2,
    title: 'NextJS Course App',
    image: peopleJPG,
    link: '/blog/nextjs-course-app',
    description: 'This is a new course app built using NextJS and TailwindCSS.',
  },
  {
    id: 3,
    title: 'logo Course',
    image: weaponsJPG,
    link: '/blog/logo-course',
    description:
      'We have just released our latest course on logo. Check it out!',
  },
]

export const games = [
  {
    id: 1,
    slug: 'character-design',
    title: 'Character Design',
    description: 'This is a character design for a new game. Multiplayer RPG!',
    image: characterJPG,
    link: 'Check out the Character Design',
    url: '/game/character-design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: ['JavaScript', 'TypeScript'],
    platforms: ['Web', 'Mobile'],
    genres: ['RPG', 'Adventure'],
    contributions: ['Design', 'Development'],
    timeToDevelop: '6 months',
  },
  {
    id: 2,
    slug: 'terrain-design',
    title: 'Terrain Design',
    description: 'This is a terrain design for a new game. Enjoy the view!',
    image: terrainsJPG,
    link: 'Check out the Terrain Design',
    url: '/game/terrain-design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: ['JavaScript', 'TypeScript'],
    platforms: ['Web', 'Mobile'],
    genres: ['RPG', 'Adventure'],
    contributions: ['Design', 'Development'],
    timeToDevelop: '6 months',
  },
  {
    id: 3,
    slug: 'village-design',
    title: 'Village Design',
    description: 'This is a village design for a new game. Enjoy the scenery!',
    image: villageGIF,
    link: 'Check out the Village Design',
    url: '/game/village-design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: ['JavaScript', 'TypeScript'],
    platforms: ['Web', 'Mobile'],
    genres: ['RPG', 'Adventure'],
    contributions: ['Design', 'Development'],
    timeToDevelop: '6 months',
  },
]

export const posts = [
  {
    id: 1,
    title: 'New Course Released',
    slug: 'new-course-released',
    tableOfContents: ['Introduction', 'Getting Started', 'Conclusion'],
    description:
      'We have just released our latest course on NextJS. Check it out!',
    image: ogresJPG,
    link: 'Read more',
    url: '/blog/new-course-released',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    id: 2,
    title: 'NextJS Course App',
    slug: 'nextjs-course-app',
    tableOfContents: ['Introduction', 'Getting Started', 'Conclusion'],
    description: 'This is a new course app built using NextJS and TailwindCSS.',
    image: peopleJPG,
    link: 'Read more',
    url: '/blog/nextjs-course-app',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    id: 3,
    title: 'logo Course',
    slug: 'logo-course',
    tableOfContents: ['Introduction', 'Getting Started', 'Conclusion'],
    description:
      'We have just released our latest course on logo. Check it out!',
    image: weaponsJPG,
    link: 'Read more',
    url: '/blog/logo-course',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
]

const sql = require('better-sqlite3')
const db = sql('games.db')

const dummyGames = [
  {
    slug: 'character-design',
    title: 'Character Design',
    description: 'This is a character design for a new game. Multiplayer RPG!',
    image: '/images/character.jpg',
    link: 'Check out the Character Design',
    url: '/game/character-design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Web , Mobile',
    genres: 'RPG, Adventure',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'terrain-design',
    title: 'Terrain Design',
    description: 'This is a terrain design for a new game. Enjoy the view!',
    image: '/images/terrains.jpg',
    link: 'Check out the Terrain Design',
    url: '/game/terrain-design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Web , Mobile',
    genres: 'RPG, Adventure',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'village-design',
    title: 'Village Design',
    description: 'This is a village design for a new game. Enjoy the scenery!',
    image: '/images/village.gif',
    link: 'Check out the Village Design',
    url: '/game/village-design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Web , Mobile',
    genres: 'RPG, Adventure',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'village-designs',
    title: 'Village Design 2',
    description:
      'This is a second village design for a new game. Enjoy the scenery!',
    image: '/images/village.gif',
    link: 'Check out the Village Design 2',
    url: '/game/village-designs',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Unity',
    genres: 'Terrain',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'character-designs',
    title: 'Character Design-2',
    description: 'This is a character design for a new game. Multiplayer RPG!',
    image: '/images/character.jpg',
    link: 'Check out the Character Design',
    url: '/game/character-designs',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Web , Mobile',
    genres: 'RPG, Adventure',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'terrain-design-and-more',
    title: 'Terrain Design 2',
    description: 'This is a terrain design for a new game. Enjoy the view!',
    image: '/images/terrains.jpg',
    link: 'Check out the Terrain Design',
    url: '/game/terrain-design-and-more',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Web , Mobile',
    genres: 'RPG, Adventure',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'village-design-and-beyond',
    title: 'Village Design 3',
    description:
      'This is a second village design for a new game. Enjoy the scenery!',
    image: '/images/village.gif',
    link: 'Check out the Village Design 3',
    url: '/game/village-design-and-beyond',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Unity',
    genres: 'Terrain',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
  {
    slug: 'character-design-super',
    title: 'Character Design-5',
    description: 'This is a character design for a new game. Multiplayer RPG!',
    image: '/images/character.jpg',
    link: 'Check out the Character Design',
    url: '/game/character-design-super',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    programmingLanguages: 'JavaScript, TypeScript',
    platforms: 'Web , Mobile',
    genres: 'RPG, Adventure',
    contributions: 'Design, Development',
    timeToDevelop: '6 months',
  },
]

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      description TEXT NOT NULL,
      link TEXT NOT NULL,
      url TEXT NOT NULL,
      content TEXT NOT NULL,
      programmingLanguages TEXT NOT NULL,
      platforms TEXT NOT NULL,
      genres TEXT NOT NULL,
      contributions TEXT NOT NULL,
      timeToDevelop TEXT NOT NULL
    )
`
).run()

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO games VALUES (
         null,
         @slug,
         @title,
         @image,
         @description,
         @link,
         @url,
         @content,
         @programmingLanguages,
         @platforms,
         @genres,
         @contributions,
         @timeToDevelop
      )
   `)

  for (const game of dummyGames) {
    stmt.run(game)
  }
  console.log('Database initialized with dummy data.')
}

initData()

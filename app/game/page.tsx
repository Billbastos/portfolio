import Link from 'next/link'

const GamesPage = () => {
  return (
    <main>
      <h1>Games</h1>
      <p>
        <Link href='/game/first-game'>First Game</Link>
      </p>
    </main>
  )
}

export default GamesPage

const GameDetailsPage = ({ params }) => {
  return (
    <main>
      <h1>Game Details</h1>
      <p>{params.slug}</p>
    </main>
  )
}

export default GameDetailsPage

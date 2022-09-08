import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// interface Players {
//   displayName: string,
//   score: number
// }

export default function Tetris() {
  const players: any[] = [
    {displayName: 'Dani', tetrisScore: {score: 432416, date: '09/06/22'}},
    {displayName: 'Cody', tetrisScore: {score: 409826, date: '09/05/22'}},
    {displayName: 'Dre', tetrisScore: {score: 999999, date: '09/01/22'}}
  ].sort((a, b) => b.tetrisScore.score - a.tetrisScore.score);
  let place = 0;
  const allPlayers: any = players.map(elem => {
    place++
    return(
      <tr key={place}>
        <td>{place}</td>
        <td>{elem.displayName}</td>
        <td>{elem.tetrisScore.score}</td>
        <td>{elem.tetrisScore.date}</td>
      </tr>
    )
  })
  return (
    <Container>
      <h3 className='text-center'>Tetris</h3>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>When</th>
          </tr>
        </thead>
        <tbody>
          { allPlayers }
        </tbody>
      </Table>
    </Container>
  )
}

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// interface Players {
//   displayName: string,
//   score: number
// }

export default function Tetris() {
  const players: any[] = [
    {displayName: 'Dani', score: 423000},
    {displayName: 'Cody', score: 403000},
    {displayName: 'Dre', score: 999999}
  ].sort((a, b) => b.score - a.score);
  let place = 0;
  const allPlayers: any = players.map(elem => {
    place++
    return(
      <tr key={place}>
        <td>{place}</td>
        <td>{elem.displayName}</td>
        <td>{elem.score}</td>
      </tr>
    )
  })
  return (
    <Container>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          { allPlayers }
        </tbody>
      </Table>
    </Container>
  )
}

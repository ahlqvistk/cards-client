import {h} from 'hyperapp';
import getScoreboard from '../../../cards-common/src/get-scoreboard';

export const Scoreboard = ({players}) => {
  const scoreboard = getScoreboard(players);

  return (
    <table class='scoreboard'>
      <thead>
        <tr>
          <th>#</th>
          {scoreboard.players.map((player) => (
            <th>{player}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {scoreboard.points.map((row, i) => (
          <tr>
            <td>{i + 1}</td>
            {row.map((point) => (
              <td>{point}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

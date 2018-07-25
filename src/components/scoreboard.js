import {h} from 'hyperapp';
import {getScoreboard} from 'cards-common';

export const Scoreboard = ({players}) => {
  const scoreboard = getScoreboard(players);

  return (
    <table class='scoreboard'>
      <thead>
        <tr>
          <th class='scoreboard-round'></th>
          {scoreboard.players.map((player) => (
            <th>{player}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {scoreboard.points.map((row, i) => (
          <tr>
            <td>Round {i + 1}</td>
            {row.map((point) => (
              <td>{point}</td>
            ))}
          </tr>
        ))}
        <tr class='scoreboard-total'>
          <td>Total</td>
          {scoreboard.totals.map((total) => (
            <td>{total}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

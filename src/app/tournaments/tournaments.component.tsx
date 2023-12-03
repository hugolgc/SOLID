import { Tournament } from "./shared/tournament.model";
import { TournamentService } from "./shared/tournament.service";
import { useEffect, useState } from "react";
import "./tournaments.component.css";

export function TournamentsComponent() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  useEffect(() => {
    getTournaments();
  }, []);

  async function getTournaments() {
    try {
      const tournamentsFromService = await TournamentService.getTournaments();
      setTournaments(tournamentsFromService);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Liste des tournois</h1>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Joueurs</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map(tournament => (
              <tr key={tournament.id}>
                <td>{tournament.name}</td>
                <td>{tournament.users.map(user => user.name).join(" - ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
      <pre>{JSON.stringify(tournaments, null, 2)}</pre>
    </>
  );
}

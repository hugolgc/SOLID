import { Service } from "../../core/abstract.service";
import { Tournament } from "./tournament.model";
import { TournamentDto } from "./tournament.dto";

export class TournamentService extends Service {
  private static readonly ENDPOINT = "/tournaments.json";

  static mapDtoToModel(tournamentsDto: TournamentDto[]) {
    return tournamentsDto.map(tournamentDto => new Tournament(tournamentDto));
  }

  static mapModelToDto(tournaments: Tournament[]) {
    return tournaments.map(tournament => tournament.getDto());
  }

  static async getTournaments() {
    const response = await fetch(TournamentService.ENDPOINT);
    const tournamentsDto: TournamentDto[] = await response.json();
    return TournamentService.mapDtoToModel(tournamentsDto);
  }

  static async getTournament(id: string) {
    const response = await fetch(`${TournamentService.ENDPOINT}/${id}`);
    const tournamentDto: TournamentDto = await response.json();
    return new Tournament(tournamentDto);
  }
}

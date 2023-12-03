import { User } from "../../users/shared/user.model";
import { Model } from "../../core/abstract.model";
import { UserService } from "../../users/shared/user.service";
import { TournamentDto } from "./tournament.dto";

export class Tournament extends Model<TournamentDto> {
  name: string;
  users: User[];

  constructor(tournamentDto: TournamentDto) {
    super(tournamentDto);
    this.name = tournamentDto.name;
    this.users = UserService.mapDtoToModel(tournamentDto.users);
  }

  getDto() {
    return {
      id: this.id,
      name: this.name,
      users: UserService.mapModelToDto(this.users),
    };
  }
}

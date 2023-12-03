import { BaseDto } from "../../core/base.dto";
import { UserDto } from "../../users/shared/user.dto";

export interface TournamentDto extends BaseDto {
  name: string;
  users: UserDto[];
}

import { User } from "../models/user.model";
import { UserDto } from "../models/user-dto.model";

export class UserService {
  private static readonly ENDPOINT = "/users.json";

  static async getUsers() {
    const response = await fetch(UserService.ENDPOINT);
    const usersDto: UserDto[] = await response.json();
    return usersDto.map(userDto => User.fromDto(userDto));
  }
}

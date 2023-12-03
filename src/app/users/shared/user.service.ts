import { User } from "./user.model";
import { UserDto } from "./user.dto";
import { Service } from "../../core/abstract.service";

export class UserService extends Service {
  private static readonly COLLECTION = "/users.json";

  static mapDtoToModel(usersDto: UserDto[]) {
    return usersDto.map(userDto => new User(userDto));
  }

  static mapModelToDto(users: User[]) {
    return users.map(user => user.getDto());
  }

  static async getUsers() {
    const response = await fetch(UserService.COLLECTION);
    const usersDto: UserDto[] = await response.json();
    return UserService.mapDtoToModel(usersDto);
  }

  static async getUser(id: string) {
    const response = await fetch(`${UserService.COLLECTION}/${id}`);
    const userDto: UserDto = await response.json();
    return new User(userDto);
  }
}

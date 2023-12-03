import { Model } from "../../core/abstract.model";
import { UserDto } from "./user.dto";
import { UserStatus } from "./user-status.type";

export class User extends Model<UserDto> {
  private static readonly MIN_AGE = 0;
  private static readonly CONNECTED_STATUS: UserStatus = "connected";

  readonly status: UserStatus;
  private _age: number;
  private _lastName: string;
  private _firstName: string;

  constructor(userDto: UserDto) {
    super(userDto);
    this.status = userDto.status;
    this._age = userDto.age;
    this._lastName = userDto.last_name;
    this._firstName = userDto.first_name;
  }

  get name() {
    return `${this._firstName} ${this._lastName}`;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    if (age < User.MIN_AGE) {
      throw new Error("Invalid age.");
    }

    this._age = age;
  }

  isConnected() {
    return this.status === User.CONNECTED_STATUS;
  }

  getDto() {
    return {
      id: this.id,
      age: this._age,
      status: this.status,
      last_name: this._lastName,
      first_name: this._firstName,
    };
  }
}

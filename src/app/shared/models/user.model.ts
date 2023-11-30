import { UserDto } from "./user-dto.model";
import { UserStatus } from "../types/user-status.type";

export class User {
  private static readonly CONNECTED_STATUS: UserStatus = "connected";
  private static readonly MIN_AGE = 0;

  get fullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  private constructor(
    public readonly id: string,
    private age: number,
    private status: UserStatus,
    private last_name: string,
    private first_name: string
  ) {}

  static fromDto(userDto: UserDto) {
    const { id, age, status, last_name, first_name } = userDto;
    return new User(id, age, status, last_name, first_name);
  }

  toDto() {
    const { id, age, status, last_name, first_name } = this;
    return { id, age, status, last_name, first_name };
  }

  getAge() {
    return this.age;
  }

  setAge(age: number) {
    if (age < User.MIN_AGE) {
      throw new Error("Age is not valid.");
    }
    this.age = age;
    return this;
  }

  isConnected() {
    return this.status === User.CONNECTED_STATUS;
  }
}

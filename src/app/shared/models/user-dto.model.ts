import { UserStatus } from "../types/user-status.type";

export interface UserDto {
  id: string;
  age: number;
  status: UserStatus;
  last_name: string;
  first_name: string;
}

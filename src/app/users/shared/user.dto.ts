import { BaseDto } from "../../core/base.dto";
import { UserStatus } from "./user-status.type";

export interface UserDto extends BaseDto {
  age: number;
  status: UserStatus;
  last_name: string;
  first_name: string;
}

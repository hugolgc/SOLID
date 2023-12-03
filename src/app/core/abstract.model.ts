import { BaseDto } from "./base.dto";

export abstract class Model<ModelDto extends BaseDto> {
  readonly id: string;

  constructor(modelDto: ModelDto) {
    this.id = modelDto.id;
  }

  abstract getDto(): ModelDto;
}

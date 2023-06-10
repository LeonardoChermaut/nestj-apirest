import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateUserDTO } from './create.user.dto';

export class UpdateUserDTO extends OmitType(CreateUserDTO, ['id'] as const) {
  @ApiProperty()
  readonly id: number;
}

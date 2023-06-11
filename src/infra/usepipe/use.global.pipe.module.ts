import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UseGlobalValidationPipe } from './use.global.pipe';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: UseGlobalValidationPipe,
    },
  ],
})
export class GlobalValidationPipeModule {}

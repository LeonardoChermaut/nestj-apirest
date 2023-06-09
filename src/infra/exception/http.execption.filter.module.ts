import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UseGlobalHttpFilter } from './http.execption.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: UseGlobalHttpFilter,
    },
  ],
})
export class HttpExceptionModule {}

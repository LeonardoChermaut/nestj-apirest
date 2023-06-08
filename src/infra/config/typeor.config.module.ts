import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmConfiguration from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfiguration)],
})
export class TypeOrmConfigurationModule {}

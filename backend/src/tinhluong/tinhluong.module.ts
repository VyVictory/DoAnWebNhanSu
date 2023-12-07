// chucvu/chucvu.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TinhluongController } from './tinhluong.controller';
import { TinhluongService } from './tinhluong.service';
import { Tinhluong, TinhluongSchema } from './tinhluong.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tinhluong.name, schema: TinhluongSchema }]),
  ],
  controllers: [TinhluongController],
  providers: [TinhluongService],
})
export class TinhluongModule {}

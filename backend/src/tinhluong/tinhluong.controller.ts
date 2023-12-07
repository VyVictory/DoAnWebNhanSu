// chucvu.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TinhluongService } from './tinhluong.service';
import { Tinhluong } from './tinhluong.schema';
@Controller('tinhluong')
export class TinhluongController {
  constructor(private readonly tinhluongService: TinhluongService) {}

  @Get()
  async getAllTinhluong() {
    return this.tinhluongService.getAllTinhluong();
  }

  @Get(':id')
  async getTinhluongById(@Param('id') id: string) {
    return this.tinhluongService.getTinhluongById(id);
  }

  @Post()
  async createTinhluong(@Body() data: Partial<Tinhluong>) {
    return this.tinhluongService.createTinhluong(data);
  }

  @Put(':id')
  async updateTinhluong(@Param('id') id: string, @Body() data: Partial<Tinhluong>) {
    return this.tinhluongService.updateTinhluong(id, data);
  }

  @Delete(':id')
  async deleteTinhluong(@Param('id') id: string) {
    return this.tinhluongService.deleteTinhluong(id);
  }
}

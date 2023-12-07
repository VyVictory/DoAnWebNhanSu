// chucvu.service.ts
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tinhluong } from './tinhluong.schema';

@Injectable()
export class TinhluongService {
  constructor(@InjectModel(Tinhluong.name) private tinhluongModel: Model<Tinhluong>) {}

  async getAllTinhluong(): Promise<Tinhluong[]> {
    return this.tinhluongModel.find().exec();
  }

  async getTinhluongById(id: string): Promise<Tinhluong>{
    const Tinhluong = await this.tinhluongModel.findById(id)

    if(!Tinhluong){
        throw new NotFoundException('Tinhluong không tồn tại');
    }else return Tinhluong;
}

  async createTinhluong(data: Partial<Tinhluong>): Promise<Tinhluong> {
    const newTinhluong = new this.tinhluongModel(data);
    return newTinhluong.save();
  }

  async updateTinhluong(id: string, data: Partial<Tinhluong>): Promise<Tinhluong> {
    return this.tinhluongModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteTinhluong(id: string): Promise<Tinhluong> {
    return this.tinhluongModel.findByIdAndDelete(id).exec();
  }
}

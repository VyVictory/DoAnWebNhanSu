// chucvu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { NhanSu } from 'nhansu/schema/Nhansu.schema';

@Schema()
export class Tinhluong extends Document {
  @Prop({ type: 'ObjectId', ref: 'Idns' })
  Idns: NhanSu;
  
  @Prop()
  Ngay:string;

  @Prop()
  Thang:string;

  @Prop()
  Nam:string;

  @Prop()
  luong: string;
}

export const TinhluongSchema = SchemaFactory.createForClass(Tinhluong);

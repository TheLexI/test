import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Log extends Document{
    @Prop()
    logLevel: number;
    
    @Prop()
    context: string;

    @Prop()
    source: string;
    
    @Prop()
    message: string;

    @Prop()
    fullMessage: string;

    @Prop({type: Date})
    moment: Date;
    
}

export const LogSchema = SchemaFactory.createForClass(Log);

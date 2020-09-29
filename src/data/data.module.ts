import { Log, LogSchema } from './models/system/log';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogService } from './services/system/log/log.service';
import { DataHelpersService } from './helpers/data-helpers.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1/nest'),
        MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    ],
    controllers: [],
    providers: [LogService, DataHelpersService],
    exports: [LogService, DataHelpersService]
})
export class DataModule { }

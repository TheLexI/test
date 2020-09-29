import { LogLevelEnum } from './../../../models/system/log-level.enum';
import { Log } from './../../../models/system/log';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LogService {
    constructor(
        @InjectModel(Log.name) private readonly LogModel: Model<Log>
    ) { }

    async insert(
        logLevel: LogLevelEnum,
        context: string,
        source: string,
        message: string,
        fullMessage: string,
        moment: Date
    ) {
        await this.LogModel.create({
            logLevel,
            context,
            source,
            message,
            fullMessage,
            moment: moment || new Date()
        })
    }

    getModel(): Model<Log> {
        return this.LogModel
    }
}

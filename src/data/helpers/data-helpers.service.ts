import { Document, Query } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { DocumentQuery } from 'mongoose';

@Injectable()
export class DataHelpersService {
    async pagination<T extends Document>(
        query: DocumentQuery<T[], T, {}>,
        pageSize: number,
        pageIndex: number
    ): Promise<{ rows: T[], length: number, pageSize: number, pageIndex: number }> {

        pageSize = pageSize || 10;
        pageIndex = pageIndex > 0 ? pageIndex : 0;
        const length = await query.estimatedDocumentCount().exec();
        return {
            rows: await query.find().limit(pageSize).skip(pageIndex * pageSize).exec(),
            length,
            pageSize,
            pageIndex,
        }
    }
}

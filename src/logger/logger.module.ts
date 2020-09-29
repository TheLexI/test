import { DataModule } from './../data/data.module';
import { AppLoggerService } from './app-logger.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [AppLoggerService],
    exports: [AppLoggerService]
})
export class LoggerModule {
}

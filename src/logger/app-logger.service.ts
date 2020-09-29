import { ContextEnum } from './../data/models/system/context.enum';
import { Injectable, Logger, LoggerService, Scope } from '@nestjs/common';
import { LogLevelEnum } from 'src/data/models/system/log-level.enum';
import { LogService } from './../data/services/system/log/log.service';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLoggerService extends Logger implements LoggerService {
    constructor(
        private readonly logService: LogService
    ) {
        super(ContextEnum.App, true)
    }

    log(message: any, context?: string, fullMessage?: string, source?: string): any {
        this.save(
            LogLevelEnum.log,
            context || this.context,
            source || '',
            message || '',
            fullMessage || ''
        );
    }

    error(message: any, trace?: string, context?: string, fullMessage?: string, source?: string): any {
        this.save(
            LogLevelEnum.log,
            context || this.context,
            source || '',
            message || '',
            `${fullMessage || ''} ${fullMessage ? ':' : ''} ${trace}`
        );
    }
    warn(message: any, context?: string, fullMessage?: string, source?: string): any {
        this.save(
            LogLevelEnum.log,
            context || this.context,
            source || '',
            message || '',
            fullMessage || ''
        );
    }
    debug(message: any, context?: string, fullMessage?: string, source?: string): any {
        this.save(
            LogLevelEnum.log,
            context || this.context,
            source || '',
            message || '',
            fullMessage || ''
        );
    }
    verbose(message: any, context?: string, fullMessage?: string, source?: string): any {
        this.save(
            LogLevelEnum.log,
            context || this.context,
            source || '',
            message || '',
            fullMessage || ''
        );
    }

    save(
        logLevel: LogLevelEnum,
        context: string,
        source: string,
        message: string,
        fullMessage: string,
    ) {
        this.logService.insert(logLevel, context, source, message, fullMessage || message, new Date());
    }

}

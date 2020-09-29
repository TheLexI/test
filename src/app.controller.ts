import { Controller, Get, Param } from '@nestjs/common';
import { DataHelpersService } from './data/helpers/data-helpers.service';
import { LogService } from './data/services/system/log/log.service';

@Controller('/')
export class AppController {
  constructor(
    private readonly logService: LogService,
    private readonly dataHelpersService: DataHelpersService,
  ) {

  }

  @Get(':pageSize/:pageIndex')
  async getHello(@Param('pageSize') pageSize: number, @Param('pageIndex') pageIndex: number) {
    return this.dataHelpersService.pagination(this.logService.getModel().find().sort({ moment: 'desc' }), Number(pageSize), Number(pageIndex));
  }
}

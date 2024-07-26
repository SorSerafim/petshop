import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// localhost:3000/v1/customers
@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os clientes';
  }

  @Get(':document')
  getById(@Param('document') document) {
    return 'Obter os clientes' + document;
  }

  @Post()
  post(@Body() body) {
    return body;
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return {
      customer: document,
      data: body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return 'Remover um cliente' + document;
  }
}

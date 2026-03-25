import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.interface';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}
  @Get()
  findAll(): {
    success: boolean;
    data: Purchase[];
    message: string;
  } {
    return {
      success: true,
      data: this.purchaseService.findAll(),
      message: 'Fetched purchases successfully',
    };
  }
}

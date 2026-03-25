import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  findAll(): {
    success: boolean;
    data: Product[];
    message: string;
  } {
    return {
      success: true,
      data: this.productService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}

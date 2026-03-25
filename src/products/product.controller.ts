import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }
}

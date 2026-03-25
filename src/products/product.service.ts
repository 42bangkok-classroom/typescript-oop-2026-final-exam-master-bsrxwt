import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  findAll(): Product[] {
    const result = fs.readFileSync(
      path.join(process.cwd(), 'data', 'products.json'),
      'utf-8',
    );
    return JSON.parse(result) as Product[];
  }
}

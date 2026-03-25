import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  findAll(): {
    success: boolean;
    data: Product[];
    message: string;
  } 
  {
    const fileData = fs.readFileSync(
      path.join(process.cwd(), 'data', 'products.json'),
      'utf-8',
    );
    return {
        success: true,
        data: JSON.parse(fileData) as Product[] ,
        message: "Fetched products successfully"
      };
  }
}

import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const result = fs.readFileSync(
      path.join(process.cwd(), 'data', 'purchases.json'),
      'utf-8',
    );
    return JSON.parse(result) as Purchase[];
  }
}

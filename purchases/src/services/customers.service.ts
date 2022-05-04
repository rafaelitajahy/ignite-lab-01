import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustomerByAuthUserId(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}

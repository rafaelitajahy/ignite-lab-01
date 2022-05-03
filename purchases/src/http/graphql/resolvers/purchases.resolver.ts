import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { CurrentUser } from 'src/http/auth/current-user';
import { ProductsService } from 'src/services/products.services';
import { PurchasesService } from 'src/services/purchases.services';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';
import { Purchase } from '../models/purchase';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesService,
    private productsService: ProductsService,
  ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchasesService.listAllPurchases();
  }

  @ResolveField()
  product(@Parent() purchases: Purchase) {
    return this.productsService.getProductById(purchases.productId);
  }

  @Mutation(() => Purchase)
  createPurchase(@Args('data') data: CreatePurchaseInput, @CurrentUser() user) {
    return null;
    // return this.purchasesService.createPurchase({
    //   productId: data.productId,
    // });
  }
}

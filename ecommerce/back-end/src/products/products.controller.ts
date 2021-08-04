import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/ban-types
  getAllProduct(): object {
    return this.productsService.getAllProduct();
  }

  @Post()
  addProduct(@Body() newProduct: ProductsModel): ProductsModel {
    this.productsService.addProduct(newProduct);
    console.log('product ', newProduct);

    return newProduct;
  }
  /* Use with mongodb
  @Post()
  async addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('imageUrl') productImageUrl: string,
    @Body('price') productPrice: number,
  ) {
    const generatedId = await this.productsService.insertProduct(
      productTitle,
      productDescription,
      productImageUrl,
      productPrice,
    );
    return { id: generatedId };
  }

  @Get()
  async getProduct(): Promise<ProductsModel[]> {
    const product = await this.productsService.getProduct();
    return product;
  }

  @Get(':id')
  getSingleProduct(@Param('id') productId: string) {
    return this.productsService.getSingleProduct(productId);
  }

  @Patch(':id')
  async updateProduct(
    @Param(':id') productId: string,
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('imageUrl') productImageUrl: string,
    @Body('price') productPrice: number,
  ) {
    await this.productsService.updateProduct(
      productId,
      productTitle,
      productDescription,
      productImageUrl,
      productPrice,
    );
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') productId: string) {
    await this.productsService.deleteProduct(productId);
    return null;
  }*/
}

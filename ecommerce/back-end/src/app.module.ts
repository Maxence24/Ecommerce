import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    ProductsModule,
    /*MongooseModule.forRoot(
      '',
    ),*/
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}

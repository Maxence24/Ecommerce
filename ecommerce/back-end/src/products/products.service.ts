import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsModel } from './products.model';
/*import { Product } from './products.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';*/

@Injectable()
export class ProductsService {
  private allProduct: Array<ProductsModel>;

  constructor() {
    this.allProduct = [];

    let product = new ProductsModel();
    product.title = 'Warhammer Age of Sigmar Extremis Starter Set';
    product.description =
      'The best way to start playing Warhammer Age of Sigmar';
    product.imageUrl =
      'https://www.games-workshop.com/resources/catalog/product/920x950/60010299027_ExtremisLead.jpg';
    product.price = 130;
    this.allProduct.push(product);

    product = new ProductsModel();
    product.title =
      "War Zone Charadon – Act II: The Book of Fire Collector's Edition";
    product.description =
      'In this narrative supplement, explore the second act of War Zone Charadon';
    product.imageUrl =
      'https://www.games-workshop.com/resources/catalog/product/920x950/60040199138_CharadonBookofFireLTDEDLead.jpg';
    product.price = 65;
    this.allProduct.push(product);

    product = new ProductsModel();
    product.title = 'Warcry Catacombs: Blood of the Everchosen ';
    product.description =
      'A Warhammer Age of Sigmar novel written by Richard Strachan';
    product.imageUrl =
      'https://www.games-workshop.com/resources/catalog/product/920x950/60100281293_WarcryCatacombsBloodoftheEverchosenENGBPB.jpg';
    product.price = 12.5;
    this.allProduct.push(product);

    product = new ProductsModel();
    product.title = 'Patrol: Space Wolves';
    product.description = 'A selection of key Space Wolves units';
    product.imageUrl =
      'https://www.games-workshop.com/resources/catalog/product/920x950/99120101332_SMSWCombatPatrolStock.jpg';
    product.price = 110;
    this.allProduct.push(product);
  }

  /* Use with mongodb
    constructor(
      @InjectModel('Product') private readonly productModel: Model<any>,
    ) mongodb
    async insertProduct(
      title: string,
      description: string,
      imageUrl: string,
      price: number,
    ) {
      const newProduct = new this.productModel({
        title,
        description,
        imageUrl,
        price,
      });
      const result = await newProduct.save();
      return result.id as string;
    }

    async getProduct(): Promise<ProductsModel[]> {
      const product = await this.productModel.find().exec();
      return product.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        imageUrl: product.imageUrl,
        price: product.price,
      }));
    }

    async getSingleProduct(productId: string) {
      const product = await this.findProduct(productId);
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        imageUrl: product.imageUrl,
        price: product.price,
      };
    }

    async updateProduct(
      productId: string,
      title: string,
      description: string,
      imageUrl: string,
      price: number,
    ) {
      const updateProduct = await this.findProduct(productId);
      if (title) {
        updateProduct.title = title;
      }
      if (description) {
        updateProduct.description = description;
      }
      if (imageUrl) {
        updateProduct.imageUrl = imageUrl;
      }
      if (price) {
        updateProduct.price = price;
      }
      updateProduct.save();
    }

    async deleteProduct(productId: string) {
      const result = await this.productModel.deleteOne({ _id: productId }).exec();
      if (result.n === 0) {
        throw new NotFoundException('Could not find product.');
      }
    }

    private async findProduct(id: string): Promise<any> {
      let product;
      try {
        product = await this.productModel.findById(id);
      } catch (error) {
        throw new NotFoundException('Could not find product.');
      }
      if (!product) {
        throw new NotFoundException('Could not find product.');
      }
      return product;
    }
    */

  getAllProduct(): Array<ProductsModel> {
    return this.allProduct;
  }

  addProduct(newProduct: ProductsModel): any {
    this.allProduct.push(newProduct);
  }
}

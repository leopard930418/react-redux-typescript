export interface ProductData {
  sku: string;
  price: number;
  quantity: number;
  shipping: number;
}

export type ProductDataset = ProductData[]

export const productData: ProductDataset = [
  {
    sku: 'Item 0001',
    price: 50_00,
    quantity: 1,
    shipping: 15_00,
  },
  {
    sku: 'Item 0002',
    price: 1_00,
    quantity: 22,
    shipping: 15_00,
  },
];

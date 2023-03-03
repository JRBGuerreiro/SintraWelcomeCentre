export type ProductPackage = {
  id: number;
  type: 'product';
  name: string;
  image: string;
  description: string;
  location: string;
  price: {
    type: 'individual' | 'group';
    rate: 'hourly' | 'daily' | 'weekly' | 'monthly';
    value: number;
    currency: string;
  };
  duration: {
    type: 'hour' | 'day' | 'week' | 'month';
    value: number;
  };
  limit: {
    type: 'person' | 'group';
    value: number;
  };
};

export default [
  {
    id: 1,
    type: 'product',
    name: 'Product 1',
    image: 'https://picsum.photos/200/300',
    description: 'Product 1 description',
    location: 'Singapore',
    price: {
      type: 'individual',
      rate: 'hourly',
      value: 100,
      currency: 'EUR'
    },
    duration: {
      type: 'day',
      value: 1
    },
    limit: {
      type: 'person',
      value: 10
    }
  }
] as ProductPackage[];

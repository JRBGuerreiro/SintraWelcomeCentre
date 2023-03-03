export type ProductPackage = {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  price: {
    type: 'individual' | 'group';
    value: number;
  };
  duration: {
    type: 'hour' | 'day';
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
    name: 'Tuk Tuk Tour',
    image: 'https://source.unsplash.com/featured/500x500',
    description: `I'm baby tacos distillery VHS pinterest. Wolf moon ascot edison bulb shabby chic everyday carry.`,
    location: 'Sintra',
    price: {
      type: 'individual',
      value: 100
    },
    duration: {
      type: 'day',
      value: 1
    },
    limit: {
      type: 'person',
      value: 10
    }
  },
  {
    id: 2,
    name: 'Walking Tour',
    image: 'https://source.unsplash.com/featured/500x500',
    description: `I'm baby tacos distillery VHS pinterest. Wolf moon ascot edison bulb shabby chic everyday carry.`,
    location: 'Sintra',
    price: {
      type: 'individual',
      value: 100
    },
    duration: {
      type: 'day',
      value: 1
    },
    limit: {
      type: 'person',
      value: 10
    }
  },
  {
    id: 3,
    name: 'E-Bike Tour',
    image: 'https://source.unsplash.com/featured/500x500',
    description: `I'm baby tacos distillery VHS pinterest. Wolf moon ascot edison bulb shabby chic everyday carry.`,
    location: 'Sintra',
    price: {
      type: 'individual',
      value: 100
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

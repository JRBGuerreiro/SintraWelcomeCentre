export type Testimonial = {
  name: string;
  image: string;
  date: Date;
  title: string;
  review: string;
  stars: number;
  link: string;
  language: 'pt' | 'en';
};

export default [
  {
    name: 'cjacomossi',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/0f/90/77/cjacomossi.jpg?w=100&h=-1&s=1',
    date: new Date('2023-02-07'),
    title: 'The Best!',
    review:
      'Tivemos uma experiência incrível com a Joana e com o David, um atendimento perfeito. David fez o nosso tour, sempre preocupado em nós mostrar tudo e contar a história com todos os detalhes. Tirou muitas fotos nossas, já que como casal é complicado. Nós levou em mais lugares que o combinado, posso dizer que conhecemos Sintra toda, graças a ele. No final encontrei Joana próximo da loja Periquita, que nos abraçou e fez uma festa. São maravilhosos!',
    stars: 5,
    link: 'https://www.tripadvisor.pt/ShowUserReviews-g189164-d16935621-r875878605-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'pt'
  },
  {
    name: 'Sofia M',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/eb/e3/default-avatar-2020-59.jpg?w=100&h=-1&s=1',
    date: new Date('2023-01-21'),
    title: 'Recomendo Vivamente',
    review: `Fizemos um passeio de tuk tuk, desde o centro da vila histórica de Sintra até ao palácio da Pena. O André mostrou-nos os recantos e encantos da sua vila natal, e contagiou-nos com o seu evidente encanto pelas ruas de Sintra, até ao Palácio. Todos os pormenores e conhecimento do André foram partilhados, porque ele acredita que "sharing is caring"! Obrigada André pela tua simpatia, sem dúvidas que criámos memórias felizes! Super recomendado!`,
    stars: 5,
    link: 'https://www.tripadvisor.pt/ShowUserReviews-g189164-d16935621-r875878605-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'pt'
  },
  {
    name: 'Inês P',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/81/default-avatar-2020-43.jpg?w=100&h=-1&s=1',
    date: new Date('2023-01-04'),
    title: 'Fantástico!',
    review:
      'Fui recebida pela Joana Vinagre que foi muito prestável e fez com que a minha experiência fosse incrível',
    stars: 5,
    link: 'https://www.tripadvisor.com/ShowUserReviews-g189164-d16935621-r873920004-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'pt'
  },
  {
    name: 'Michael',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/eb/default-avatar-2020-27.jpg?w=100&h=-1&s=1',
    date: new Date('2023-03-02'),
    title: 'Rogerio cares',
    review:
      'Perfect excursion on a lovely day. Worth it. Be ready for a little climbing. Views incredible. Forest fun.',
    stars: 5,
    link: 'https://www.tripadvisor.com/ShowUserReviews-g189164-d16935621-r880734334-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'en'
  },
  {
    name: 'Anastasia P',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/e6/default-avatar-2020-45.jpg?w=100&h=-1&s=1',
    date: new Date('2023-03-01'),
    title: '1 hour and a half tuk tuk tour',
    review: `We arrived in Sintra in the afternoon and the best way to visit all the mountain and the centre is with the tuk tuk tour, as the welcome centre suggested. We've been satisfied. Felipe, the guide, show us all the main buildings and told us the stories behind them. Also took us to really nice view points.`,
    stars: 4,
    link: 'https://www.tripadvisor.com/ShowUserReviews-g189164-d16935621-r880618404-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'en'
  },
  {
    name: 'Ricardo',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/81/default-avatar-2020-43.jpg?w=100&h=-1&s=1',
    date: new Date('2023-03-01'),
    title: 'Great tour with Felipe',
    review:
      'We had a tuk tuk tour with Felipe to Palácio da Pena and it was great. He is very kind and knowledgeable, and told us a lot about Sintra. Highly recommended!',
    stars: 5,
    link: 'https://www.tripadvisor.com/ShowUserReviews-g189164-d16935621-r880180474-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'en'
  },
  {
    name: 'Sophie',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/3f/8a/e7/sophieburrows.jpg?w=100&h=-1&s=1',
    date: new Date('2023-03-01'),
    title: 'Great tour with Roger',
    review:
      'Great tour with Rogerio (roger), very knowledgable and answered all our questions about the history of Sintra. He recommended we visit Quinta da Regaleira which was amazing, well worth exploring - particularly the initiation well and tunnels.',
    stars: 5,
    link: 'https://www.tripadvisor.com/ShowUserReviews-g189164-d16935621-r879271865-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portug.html',
    language: 'en'
  }
] as Testimonial[];

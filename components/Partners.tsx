const images = [
  '/assets/images/partners/adega-viuva-gomes.png',
  '/assets/images/partners/biesters-palace.png',
  '/assets/images/partners/boulder-sintra.jpg',
  '/assets/images/partners/casa-prego.png',
  '/assets/images/partners/cascais-shopping.png',
  '/assets/images/partners/centro-hipico.jpg',
  '/assets/images/partners/dino-parque.png',
  '/assets/images/partners/freeport-lisboa.jpg',
  '/assets/images/partners/furnas-guincho.png',
  '/assets/images/partners/jardim-zoologico.jpg',
  '/assets/images/partners/mourisca.jpg',
  '/assets/images/partners/nata-pura.jpg',
  '/assets/images/partners/pena-aventura.png',
  '/assets/images/partners/penha-longa.png',
  '/assets/images/partners/piriquita.png',
  '/assets/images/partners/queijadas-sapa.jpg'
];

const Partners = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="border-gray-600 relative h-80 w-[200%] overflow-hidden border-t border-b">
        <div className="animate absolute left-0 flex h-80 w-[200%] animate-scroll items-center justify-around gap-20">
          {images.map((i) => {
            return (
              <div className="flex items-start justify-center">
                <img src={i} className="object-contain" />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className="flex items-start justify-center">
                <img src={i} className="object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;

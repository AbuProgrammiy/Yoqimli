export interface MenuProduct {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  imageAlt: string;
  label?: string;
}

const image = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=900&q=82`;

export const allCategory = 'Barçasi';
export const categories = [allCategory, 'Burgerlar', 'Sendviçlar', 'Pitsa', 'Gazaklar', 'Kartoşka fri', 'Içimliklar'];

export const menuProducts: MenuProduct[] = [
  {
    name: 'Yoqimli maxsus burger',
    description: 'Ikki qavatli göştli kotlet, çeddar pişloği, maxsus sous, marinadlangan bodring va qizartirilgan buloçka.',
    price: '48 000 UZS',
    category: 'Burgerlar',
    image: image('photo-1568901346375-23c9450c58cd'),
    imageAlt: 'Salat bargi va pomidorli ikki qavatli pishloqli burger',
    label: 'Eng köp tanlanadi',
  },
  {
    name: 'Sabzavotli burger',
    description: 'Qarsildoq sabzavotli kotlet, avokado, barra kökatlar va xuşböy kökatli sous.',
    price: '42 000 UZS',
    category: 'Burgerlar',
    image: image('photo-1550547660-d9450f859349'),
    imageAlt: 'Yangi sabzavotlar va pişloqli burger',
  },
  {
    name: 'Qarsildoq tovuqli sendviç',
    description: 'Qizartirib pişirilgan tovuq, karam salati, pomidor va qaymoqli qalampirli mayonez.',
    price: '45 000 UZS',
    category: 'Sendviçlar',
    image: image('photo-1606755962773-d324e0a13086'),
    imageAlt: 'Yangi kökatlar bilan tortiladigan qarsildoq tovuqli sendviç',
    label: 'Mehmonlar sevimlisi',
  },
  {
    name: 'Margarita pitsasi',
    description: 'Uzoq qaynatilgan pomidor sousi, yumşoq motsarella pişloği, rayhon va zaytun moyi.',
    price: '68 000 UZS',
    category: 'Pitsa',
    image: image('photo-1513104890138-7c749659a591'),
    imageAlt: 'Rayhon barglari solingan yangi Margarita pitsasi',
  },
  {
    name: 'Tillarang kartoşka fri',
    description: 'Sirti qarsildoq, içi yumşoq, maxsus ziravorlar bilan taʼmlangan kartoşka fri.',
    price: '18 000 UZS',
    category: 'Kartoşka fri',
    image: image('photo-1573080496219-bb080dd4f877'),
    imageAlt: 'Tillarang tusga kirgunça qovurilgan qarsildoq kartoşka fri',
  },
  {
    name: 'Pişloqli kartoşka şarçalari',
    description: 'Sirti qarsildoq, içi erigan pişloqli kartoşka şarçalari — ranç sousi bilan.',
    price: '26 000 UZS',
    category: 'Gazaklar',
    image: image('photo-1576506295286-5cda18df43e7'),
    imageAlt: 'Gazak uçun tortiladigan tillarang kartoşka bölakçalari',
  },
  {
    name: 'Yalpizli limonad',
    description: 'Yangi siqilgan limon şarbati, bir çimdim yalpiz va yengil gazlangan suv.',
    price: '16 000 UZS',
    category: 'Içimliklar',
    image: image('photo-1497534446932-c925b458314e'),
    imageAlt: 'Muz ustida tortiladigan tetiklantiruvçi mevali içimlik',
    label: 'Har kuni yangi',
  },
  {
    name: 'Rezavorli limonad',
    description: 'Mavsumiy rezavorlar, laym va gazlangan suvdan tayyorlangan xuşböy içimlik.',
    price: '19 000 UZS',
    category: 'Içimliklar',
    image: image('photo-1497534446932-c925b458314e'),
    imageAlt: 'Muz ustida tortiladigan rang-barang rezavorli içimlik',
  },
];

export const popularProducts = [
  menuProducts[0],
  menuProducts[2],
  menuProducts[4],
];

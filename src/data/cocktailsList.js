import margarita from 'images/cocktailsList/margarita.jpg';
import cosmopolitan from 'images/cocktailsList/cosmopolitan.jpg';
import mojito from 'images/cocktailsList/mojito.jpg';

export const cocktailsArray = [
  {
    id: 1,
    name: 'margarita',
    composition: 'tequila, lime juice, salt',
    fact: 'the rims of glasses are covered with a thin layer of salt to enhance the taste of the drink',
    img: `${margarita}`,
  },
  {
    id: 2,
    name: 'cosmopolitan',
    composition: 'vodka, cranberry, orange liqueur, citrus',
    fact: 'this cocktail was named in honor of the famous magazine',
    img: `${cosmopolitan}`,
  },
  {
    id: 3,
    name: 'mojito',
    composition: 'mint, white rum, sugar, zesty lime, cooling soda water',
    fact: 'mojito was Hemingway`s favorite drink',
    img: `${mojito}`,
  },
];

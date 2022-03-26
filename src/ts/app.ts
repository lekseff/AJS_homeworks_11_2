import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log('Корзина до: ', cart.items);

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 1000);
const movie = new Movie(2000, 'Мстители', 2000, 2012, 'The Avengers', 'США', 'Avengers Assemble!', ['фантастика', ',боевик', 'фэнтези'], '137мин/2:17');

// Добавляем в корзину
cart.add(book);
cart.add(musicAlbum);
cart.add(movie);

console.log('Корзина после: ', cart.items);
console.log('Общая стоимость без скидки: ', cart.totalCost());
console.log("Общая стоимость со скидкой: ", cart.totalCost(20));

//Удаление из корзины
cart.remove(1001);
console.log('Корзина после удаления: ', cart.items);


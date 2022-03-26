import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Buyable from '../domain/Buyable';

describe('CartService', () => {
  let cart: any;

  beforeEach(() => {
    cart = new Cart();
  });

  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
  });

  test('add an item to the cart', () => {
    const book = new Book(2022, 'Пикник на обочине', 'Стругацкие', 2500, 320);
    const expected = [{ id: 2022, name: 'Пикник на обочине', author: 'Стругацкие', price: 2500, pages: 320 }];
    cart.add(book);
    expect(cart.items).toEqual(expected);
  });

  test('no product', () => {
    expect(cart.totalCost()).toBe(0);
  });
})

describe('test discount, delete product', () => {
  let cart: any,
    book: Buyable,
    musicAlbum: Buyable,
    movie: Buyable;

  beforeEach(() => {
    cart = new Cart();
    book = new Book(1010, 'Пикник на обочине', 'Стругацкие', 2500, 320);
    musicAlbum = new MusicAlbum(1020, 'Meteora', 'Linkin Park', 1000);
    movie = new Movie(1030, 'Мстители', 2000, 2012, 'The Avengers', 'США', 'Avengers Assemble!', ['фантастика', ',боевик', 'фэнтези'], '137мин/2:17');
    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);
  });

  test('Total cost', () => {
    expect(cart.totalCost()).toBe(5500);
  });

  test('The total cost with a discount 50%', () => {
    expect(cart.totalCost(50)).toBe(2750);
  });

  test('delete a product', () => {
    const expected = [{ id: 1010, name: 'Пикник на обочине', author: 'Стругацкие', price: 2500, pages: 320 }];
    cart.remove(1020);
    cart.remove(1030);
    expect(cart.items).toEqual(expected);
  });

})

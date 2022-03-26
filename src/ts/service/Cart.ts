import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  /**
   * Добавляет в козину
   */
  add(item: Buyable): void {
    this._items.push(item);
  }

  /**
   * 
   * @param value Размер скидки в %, 0-99%
   * @returns Общая стоимость со скидкой или без
   */
  totalCost(value?: number): number {
    const itemsList = [...this._items];
    if (itemsList.length === 0) return 0;
    const totalCost = itemsList.reduce((acc, item) => acc += item.price, 0);
    return (!value) ? totalCost : totalCost - totalCost * value / 100;
  }

  /**
   * Удаляет товар из корзины
   * @param id - id товара
   */
  remove(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }

  /**
   * Возвращает массив элементов корзины
   */
  get items(): Buyable[] {
    return [...this._items];
  }
}

export class itemComponet
{
  item : string;
  itemCount : number;

  constructor()
  {
    console.log('Constructor called');
  }

  printItemDetail()
  {
    console.log(`${this.item} has total ${this.itemCount} copies`);
  }
}

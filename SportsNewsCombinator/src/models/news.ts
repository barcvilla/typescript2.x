/**News model: Permite encapsular un conjunto de articles de cada canal de noticias*/

import { IArticle } from "./IArticle";

export class News
{
  /**definimos propiedad privada tipo IArticle para luego definir sus metodos get y set */
  private _article: IArticle[];

 /**Definimos el constructor y especificamos 3 propiedades y les asignamos un valor al momento de la construccion del objeto */
  constructor(public status:string, public source:string, public sortBy:string){}

  /**Getter and Setter */
  get Article():IArticle[]
  {
    return this._article;
  }

  set Article(value: IArticle[])
  {
    if(value.length > 0)
    {
      this._article = value;
    }
  }

}

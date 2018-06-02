import { IArticle } from "./IArticle";

/*Article Model*/
export class Article implements IArticle
{
  author : string;
  title : string;
  description : string;
  url : string;
  urlToImage : string;
  publishedAt : string;

  getFormattedDate():string
  {
    return "";
  }
}

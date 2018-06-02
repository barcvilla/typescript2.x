/**Interface que contiene todas las propiedades requeridas por la clase Article */
export interface IArticle
{
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
 /**Date format: yyyy-mm-dd */
  getFormattedDate(): string;
}

// src/types/jquery.slick.d.ts
declare module "jquery" {
  interface JQuery<TElement = HTMLElement> {
    slick(options?: any): JQuery;
  }
}

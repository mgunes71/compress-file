import {Type} from "@angular/core";

export type HttpOptions = {
  baseUrl: string;
  providers: { provide: any, useClass: Type<any>, multi: boolean }[];
}

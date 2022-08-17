import { Injectable } from '@angular/core';
import {HttpService} from "@core/modules/http/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class FileOperationApi {

  constructor(private http: HttpService) { }


  getConvert(model: any): Promise<any> {
    return this.http.post('http://localhost:3008/convert', model)
  }
}

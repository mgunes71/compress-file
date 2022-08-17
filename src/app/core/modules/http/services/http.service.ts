import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {AlertService} from '@shared/modules/ui-kit/alert/alert.service';
import {HttpHelper} from "@core/modules/http/helpers/http.helper";

interface SuccessResponse<T = any> {
  data: T;
  status: 'success';

  token?: string;
}

interface ErrorResponse {
  error: string | string[];
  status: 'failure';

  message?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService<T = any, U = any> {

  constructor(private httpClient: HttpClient,
              private alertService: AlertService) {
  }

  get(path: string, params: HttpParams | any = new HttpParams()): Promise<U> {
    return this.httpClient.get<T>(`${HttpHelper.options.baseUrl}${path}`, {params})
      .toPromise()
      .then((res: T | any) => res)
      .catch(err => (err));
  }

  put(path: string, body: any = {}): Promise<U> {
    return this.httpClient.put<T>(`${HttpHelper.options.baseUrl}${path}`, body)
      .toPromise()
      .then((res: T | any) => res)
      .catch(err => (err));
  }

  post(path: string, body: any = {}): Promise<U> {
    return this.httpClient.post<T>(`${HttpHelper.options.baseUrl}${path}`, body)
      .toPromise()
      .then((res: T | any) => res)
      .catch(err => (err));
  }

  delete(path: string, params: HttpParams | any = new HttpParams()): Promise<U> {
    return this.httpClient.delete<T>(`${HttpHelper.options.baseUrl}${path}`, {params})
      .toPromise()
      .then((res: T | any) => res)
      .catch(err => (err));
  }

  patch(path: string, body: any = {}): Promise<U> {
    return this.httpClient.patch<T>(`${HttpHelper.options.baseUrl}${path}`, body)
      .toPromise()
      .then((res: T | any) => res)
      .catch(err => (err));
  }

  download(path: string, params: HttpParams | any = new HttpParams()) {
    const method: ('get' | 'post') = 'get';
    return this.httpClient[method]<T>(`${HttpHelper.options.baseUrl}${path}`, {
      params,
      responseType: 'blob' as any,
      observe: 'response'
    })
      .toPromise()
      .then(res => {
        if (!res) {
          return false;
        }

        const fileData: any = res.body;
        if (!fileData) {
          return false;
        }

        // @ts-ignore
        const filename = res.headers.get('content-disposition').split('filename=')[1];
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(fileData);
        a.href = objectUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(objectUrl);
        return true;
      })
      .catch(err => (err));
  }

  rawData(path: string, params: HttpParams | any = new HttpParams()) {
    const method: ('get' | 'post') = 'get';
    return this.httpClient[method]<T>(`${HttpHelper.options.baseUrl}${path}`, {params, responseType: 'blob' as any})
      .toPromise()
      .catch(err => (err));
  }


  // private formatErrors(error: any) {
  //   // console.error('API Error', error);
  //   let errorMessage = '';
  //   const errors = error?.error?.error;
  //   if (errors instanceof Array) {
  //     for (const message of errors) {
  //       errorMessage += '\n' + message;
  //     }
  //   } else {
  //     errorMessage = errors;
  //   }
  //   if (error.status !== 401) {
  //     this.alertService.Toast({title: 'Something went wrong', html: errorMessage, type: 'error'});
  //   }
  //   throw new Error(errors);
  // }
}

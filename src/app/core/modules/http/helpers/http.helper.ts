import {Type} from "@angular/core";
import {HttpOptions} from "@core/modules/http/types/http.options";

export const HttpHelper = new class {
  options: HttpOptions = {
    baseUrl: '',
    providers: []
  }

  setOptions(options: HttpOptions) {
    this.options = options
  }
}

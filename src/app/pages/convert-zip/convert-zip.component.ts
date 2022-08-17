import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-convert-zip',
  templateUrl: './convert-zip.component.html',
  styleUrls: ['./convert-zip.component.scss']
})
export class ConvertZipComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  }

  compressFile(event: any) {
    let formData = new FormData();
    const file = event.target.files[0];
    formData.append('file', file)

    this.httpService.post('http://localhost:3008/convert', formData, {
      responseType: 'blob'
    }).toPromise().then(response => {
      let fileUrl = window.URL.createObjectURL(new Blob([(response)]));
      let fileLink = document.createElement('a');
      fileLink.href = fileUrl;
      fileLink.setAttribute('download', `${file.name}.zip`);
      document.body.appendChild(fileLink);
      fileLink.click();
    })
  }

}

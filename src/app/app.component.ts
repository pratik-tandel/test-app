import { Component } from '@angular/core';
import { OpenaiService } from './openai.service';

export class textResponse {
  sno: number = 1;
  text: string = '';
  response: any = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchQuery: string;
  public searchResults: any[] = [];


  constructor(private openaiService: OpenaiService) {
    this.searchQuery = '';
  }

  performSearch() {
    if (this.searchQuery) {
      // Make an HTTP GET request to the API endpoint
      this.openaiService.searchRegisteredUser(this.searchQuery).subscribe(
        (response: any) => {
          if (Array.isArray(response)) {
            this.searchResults = response;
          } else {
            console.error('API response is not an array:', response);
            this.searchResults = [];
          }
        }
        // ,
        // (error: any) => {
        //   console.error('Error occurred during API request:', error);
        //   this.searchResults = [];
        // }
      );
    } else {
      this.searchResults = [];
    }
  }

  // onSearch() {
  //   this.openaiService.searchRegisteredUser(this.searchQuery);
  // }

  // textList:textResponse[]=[{sno:1,text:'',response:''}];
  // generateText(data:textResponse) {
  //   this.openaiService.generateText(data.text).then(text => {
  //     data.response = text;
  //     if(this.textList.length===data.sno){
  //       this.textList.push({sno:1,text:'',response:''});
  //     }
  //   });
  // }
}
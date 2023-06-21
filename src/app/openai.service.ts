import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  public apiEndpoint = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) {
    // this.openai = new OpenAIApi(this.configuration);
  }
  
  searchRegisteredUser(searchTerm: string) {
    return this.http.get(`${this.apiEndpoint}?q=${searchTerm}`);
  }



  // private openai: OpenAIApi;
  // configuration = new Configuration({
  //   apiKey: "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",
  // });

  // generateText(prompt: string):Promise<string | undefined>{
  //  return this.openai.createCompletion({
  //       model: "text-davinci-003",
  //       prompt: prompt,
  //       max_tokens: 256
  //     }).then(response => {
  //       return response.data.choices[0].text;
  //     }).catch(error=>{
  //       return '';
  //     });
  // }

}
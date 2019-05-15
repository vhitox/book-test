import { Component } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import { Books } from './classes/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-test';
  constructor(private _freeApiService: FreeapiService){

  }

  listbooks: Books[];

  ngOnInit(){
    this._freeApiService.getbooks()
    .subscribe(
      data=>
      {
        this.listbooks = data;
      }
    );
  }
}

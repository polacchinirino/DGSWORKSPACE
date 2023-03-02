import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  constructor(public http: HttpClient) { }
  inputValue: any;
  battute: any;
  ngOnInit(): void {
  }

  caricaBattute(){
    this.http.get('https://api.chucknorris.io/jokes/search?query='+this.inputValue).subscribe(resp =>{
      this.battute = resp;
      this.battute = this.battute.result;
    })
  }

}

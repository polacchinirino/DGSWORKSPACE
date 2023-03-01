import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  battuta: string;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  caricaBattuta(){
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe(resp =>{
      this.battuta = resp["value"];
    })
  }



}

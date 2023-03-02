import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  battuta: string;
  categorie: any;
  categoriaAttuale: string;


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.caricaCategoria();
  }

  caricaBattutaDataUnaCategoria(categoria){
    this.http.get('https://api.chucknorris.io/jokes/random?category='+categoria).subscribe(resp =>{
      this.battuta = resp['value'];
      this.categoriaAttuale = categoria;
    })
  }

  caricaCategoria(){
    this.http.get('https://api.chucknorris.io/jokes/categories').subscribe(resp =>{
      this.categorie = resp;
    })
  }

  showBattuta(categoria){
    if(categoria == this.categoriaAttuale){
      return true;
    }
    return false;
  }
}

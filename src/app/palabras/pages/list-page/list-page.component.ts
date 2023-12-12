import { Component, OnInit } from '@angular/core';
import { Palabra } from '../../interfaces/palabra.interface';
import { PalabrasService } from '../../services/palabras.service';

@Component({
  selector: 'palabras-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  public palabras: Palabra[] = [];

  constructor(private palabrasService: PalabrasService){}

  ngOnInit(): void {
    this.palabrasService.getPalabras().subscribe(palabras => this.palabras = palabras);
  }

}

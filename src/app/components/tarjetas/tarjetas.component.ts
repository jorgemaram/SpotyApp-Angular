import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = []

  constructor(private _router: Router ) { }

  checkArtist(item: any) {
    let artistId;
    
    if (item.type === "artist") {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this._router.navigate(['/artist', artistId])
  }

  ngOnInit(): void {
  }

}

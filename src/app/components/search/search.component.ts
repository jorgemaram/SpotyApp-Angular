import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists : any[] = []
  constructor(private _spotify: SpotifyService) { }

  search(termino: string) {
    console.log(termino)
    this._spotify.getArtist(termino)
        .subscribe((data: any) => {
          this.artists = data;
        })
    
  }

  ngOnInit(): void {
  }

}

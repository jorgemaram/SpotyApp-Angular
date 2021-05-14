import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private _router: ActivatedRoute, private _spotify: SpotifyService) {
    
    this._router.params.subscribe(params => {
      this.loadingArtist = true
      this.getArtist(params['id'])
      this.getTopTracks(params['id'])
    })
  }
  
  getArtist(id: string) {
    this._spotify.getArtist(id)
        .subscribe(artist => {
          console.log(artist)
          this.artist = artist
          this.loadingArtist = false;
      })
  }

  getTopTracks(id: string) {
    this._spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks)
        this.topTracks = topTracks;
    })
  }


  ngOnInit(): void {
  }

}

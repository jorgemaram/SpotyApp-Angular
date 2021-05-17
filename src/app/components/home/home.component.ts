import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs: any[] = []
  loading: boolean;
  error: boolean;
  errorMsg: string;

  constructor(private _spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    
    this._spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = errorService.error.error.message
      })
  }

  ngOnInit(): void {
  }

}

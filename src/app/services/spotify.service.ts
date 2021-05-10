import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) {

    console.log('Spotify listo')
  }
  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD6ySWyW4RDNbzW4Wr7fuOokSeUIXcT3Dg7XgES50nBoXqcUtImM7HQ93RvRnCSl588XiIQueGtmJkXaM8'
    })
    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map(data => data['albums'].items))
      
  }

  getArtist(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD6ySWyW4RDNbzW4Wr7fuOokSeUIXcT3Dg7XgES50nBoXqcUtImM7HQ93RvRnCSl588XiIQueGtmJkXaM8'
    })
    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map(data => data['artists'].items))
  }
}

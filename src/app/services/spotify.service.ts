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

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBf-za3lVKioTRrSGWc5YKLBsDL5EoOQqWBn-7u47rW8eLv3VcRa-g29P08unB48aI1IKxTKCEHsafpUT8'
    })
    return this._http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items))

  }

  getArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items))
  }

  getArtist(id: string) {

    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map(data => data['tracks']))
  }
  
}



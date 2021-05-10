import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) {

    console.log('Spotify listo')
  }
  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-odrcaTCol9yjGPu6Om4pqmAcLOlVtIIuiBgTx6KwVvTFqGDWZQ7mNKe3r2GwifACM7p9V-wPfuZXz6g'
    })
    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      
  }
}

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
      'Authorization': 'Bearer BQAGuZ03iMINLOUKPAz2FhgHyeXaaiZ2Rn0cskHH147zq5kMfR8zVqje_Ak6qf5ut2G_34vKVsj3qI9LQas'
    })
    this._http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
      console.log(data)
    })
  }
}

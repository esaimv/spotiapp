import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable()
export class SpotifyService {

  artistas:any [] = []
  urlBusqueda:string = "https://api.spotify.com/v1/search"
  urlArtista:string = "https://api.spotify.com/v1/artists"
  constructor(private http:Http) { }



  getArtistas(termino:string){
    let headers = new Headers()
    headers.append('authorization', 'Bearer BQBPCv_h_Sbc1o2NOgoaA74iHhDBdZ_DyaJIalpyEhxuRvtw1tr9a2ywDyQRLLIAnkOdlIAW09Xwowbpc1PIag')
    let query = "?q=" + termino + "&type=artist"
    let url = this.urlBusqueda + query

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json().artists.items)
        this.artistas = res.json().artists.items
        return res.json().artists.items
      })
  }
  getArtista(id:string){
    let headers = new Headers()
    headers.append('authorization', 'Bearer BQBPCv_h_Sbc1o2NOgoaA74iHhDBdZ_DyaJIalpyEhxuRvtw1tr9a2ywDyQRLLIAnkOdlIAW09Xwowbpc1PIag')
    let query = "/"+id
    let url = this.urlArtista + query

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json())
        return res.json()// this.artistas = res.json().artists.items
      })
  }
  getTop(id:string){
    let headers = new Headers()
    headers.append('authorization', 'Bearer BQBPCv_h_Sbc1o2NOgoaA74iHhDBdZ_DyaJIalpyEhxuRvtw1tr9a2ywDyQRLLIAnkOdlIAW09Xwowbpc1PIag')
    let query = "/"+id+"/top-tracks?country=US"
    let url = this.urlArtista + query

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json().tracks)
        return res.json().tracks// this.artistas = res.json().artists.items
      })
  }

}

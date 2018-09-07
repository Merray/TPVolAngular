import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../../model/client';
import {ClientEl} from '../../model/client-el';
import {ClientMoral} from '../../model/client-moral';
import {ClientPhysique} from '../../model/client-physique';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = 'http://localhost:8080/TPVolAngular';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/rest/client/`);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/article/${id}`);
  }

  public findById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/rest/client/${id}`);
  }

  public save(client: Client): Observable<any> {
    if (client.id_client) {
      return this.http.put(`${this.url}/rest/client/`, client);
    } else {
      /* return this.http.post(`${this.url}/rest/adherent/`, adherent);*/
      if (client instanceof ClientEl) {
        const o = {
          id_client: client.id_client, nom: client.nom, numeroTel: client.numeroTel, numeroFax: client.numeroFax, email: client.email,
          prenom: client.prenom
        };
        console.log(o);
        return this.http.post(`${this.url}/rest/client/el`, o);
      } else if (client instanceof ClientMoral) {
        const o = {
          id_client: client.id_client, nom: client.nom, numeroTel: client.numeroTel, numeroFax: client.numeroFax, email: client.email,
          siret: client.siret
        };
        console.log(o);
        return this.http.post(`${this.url}/rest/client/moral`, o);

      } else if (client instanceof ClientPhysique) {
        const o = {
          id_client: client.id_client, nom: client.nom, numeroTel: client.numeroTel, numeroFax: client.numeroFax, email: client.email,
          prenom: client.prenom
        };
        console.log(o);
        return this.http.post(`${this.url}/rest/client/physique`, o);

      }

    }
  }


}

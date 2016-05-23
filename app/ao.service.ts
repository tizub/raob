import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AO} from './beans/ao';

@Injectable()
export class AOService {
    apiUrl = 'app/aos';
    headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers({'Content-Type': 'application/json'})
    }

    getList(): Promise<AO[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then((response:Response) => response.json().data)
            .catch(this.handleError);
    }

    getItemFromId(id: number): Promise<AO> {
        return this.getList().then(response => response.filter(item => item.id === id)[0]);
    }

    save(ao: AO): Promise<AO> {
        if (ao.id) {
            return this.put(ao);
        }
        return this.post(ao);
    }

    private post(ao: AO): Promise<AO> {
        return this.http
            .post(this.apiUrl, JSON.stringify(ao), {headers: this.headers})
            .toPromise()
            .then((response:Response) => response.json().data)
            .catch(this.handleError);
    }

    private put(ao: AO): Promise<AO> {
        return this.http
            .put(`${this.apiUrl}/${ao.id}`, JSON.stringify(ao), {headers: this.headers})
            .toPromise()
            .then(() => ao)
            .catch(this.handleError);
    }

    delete(ao: AO): Promise<AO> {
        return this.http
            .delete(`${this.apiUrl}/${ao.id}`, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('Error in AO service', error);
        return Promise.reject(error.message || error);
    }
}
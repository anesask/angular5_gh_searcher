import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username="aneask";
    private client_id = '04eb022e12156eeba343';
    private client_secret='06c1eea3b113a627783f7878e217048a9998963c';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
}
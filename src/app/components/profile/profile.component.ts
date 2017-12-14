import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',

})
export class ProfileComponent implements OnInit {
  user:any;
  repos:any;
  username:string;

  constructor(private _githubService: GithubService) {    
    this.user = false;
   }

   searchUser(){
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
   }
  
  ngOnInit() {
  }

}
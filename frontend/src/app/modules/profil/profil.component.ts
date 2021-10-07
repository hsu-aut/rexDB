import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Profil } from './profil';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

    public profil= {} as Profil;

     submitted = false;
    
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(profil) { 
      this.submitted = true;
      console.log(this.profil);
 }
}

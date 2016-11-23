import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() 
  nombre: string;

  @Input() 
  apellido: string;

  @Output() initialized = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.initialized.emit("Emitido " + Date.now());
  }

  ngOnDestroy() 
  {
    console.log("Muero");
  }

}

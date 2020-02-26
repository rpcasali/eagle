import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  toogleMenu = false;


  constructor() { }

  ngOnInit(): void {
    
  }

  public openMenu() {
    this.toogleMenu = !this.toogleMenu;
    console.log(this.toogleMenu);
  }

}

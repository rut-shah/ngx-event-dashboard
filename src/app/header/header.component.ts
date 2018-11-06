import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mth-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeTab:string;
  
  constructor(private router: Router) { 
    router.events.subscribe(() => {
      this.activeTab = this.router.url === '/' ? 'dashboard' : this.router.url.toLowerCase();
    });
  }

  ngOnInit() {
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSidebar!: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = this.shouldShowSidebar(this.router.url);
      }
    });
  }

  private shouldShowSidebar(url: string): boolean {
    // Specify the paths where you don't want to show the sidebar
    const excludedPaths = ['/', '/auth'];
    return !excludedPaths.includes(url);
  }
}

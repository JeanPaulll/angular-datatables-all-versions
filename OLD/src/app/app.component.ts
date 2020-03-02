import {Component, Inject, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CodeViewerComponent} from './components/code-viewer/code-viewer.component';
import {filter, map, mergeMap} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(CodeViewerComponent) viewer;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data))
      .subscribe(data => {
        this.viewer.setPath(data.src ? data.src : '');
        this.viewer.hideCodeBlock();
      });
  }

  onDoc() {
    this.document.location.href = 'https://jeanpaulll.github.io/angular-datatables-all-versions/documentation';
  }
}

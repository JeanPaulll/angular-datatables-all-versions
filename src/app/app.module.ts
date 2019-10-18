import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMdModule} from 'ngx-md';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CodeViewerComponent} from './components/code-viewer/code-viewer.component';
import {DocsViewerComponent} from './components/docs-viewer/docs-viewer.component';
import {HomeComponent} from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CodeViewerComponent,
        DocsViewerComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxMdModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

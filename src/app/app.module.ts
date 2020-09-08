import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaqsComponent } from './content/faqs/faqs.component';
import { ContactComponent } from './content/contact/contact.component';
import { BlogComponent } from './blog/blog/blog.component';

import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    FaqsComponent,
    ContactComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MainModule,
  ],
  providers: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

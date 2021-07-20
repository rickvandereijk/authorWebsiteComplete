import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {QuoteServiceService} from './quote-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SmallButtonComponent } from './small-button/small-button.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BooksIconComponent } from './books-icon/books-icon.component';
import { HomepageFormComponent } from './homepage-form/homepage-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderDirective } from './slider.directive';
import { QuoteComponent } from './quote/quote.component';
import { SmallButtonWhiteComponent } from './small-button-white/small-button-white.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ThankYouMessageComponent } from './thank-you-message/thank-you-message.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SmallButtonComponent,
    CardsComponent,
    FooterComponent,
    BooksComponent,
    BooksIconComponent,
    HomepageFormComponent,
    SliderDirective,
    QuoteComponent,
    SmallButtonWhiteComponent,
    ThankYouPageComponent,
    ThankYouMessageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    	ReactiveFormsModule,
  ],
  providers: [QuoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturesComponent } from './features/features.component';
import { PlansComponent } from './plans/plans.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BeforeAfterComponent } from './before-after/before-after.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    FeaturesComponent,
    PlansComponent,
    TestimonialComponent,
    BeforeAfterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

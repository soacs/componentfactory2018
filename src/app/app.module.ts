import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { HeroJobAdComponent } from './components/herojobad/hero-job-ad.component';
import { AdBannerComponent } from './components/adbanner/ad-banner.component';
import { HeroProfileComponent } from './components/heroprofile/hero-profile.component';
import { AdDirective } from './directives/ad.directive';
import { AdService } from './services/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}

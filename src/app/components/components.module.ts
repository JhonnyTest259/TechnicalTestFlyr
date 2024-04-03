import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { OffersComponent } from './offers/offers.component';
import { CardsComponent } from './cards/cards.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    OffersComponent,
    CardsComponent,
    DestinationsComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, BannerComponent, OffersComponent],
})
export class ComponentsModule {}

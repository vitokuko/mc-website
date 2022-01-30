import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MainNavigationComponent } from './components/layout/main-navigation/main-navigation.component';
import { SliderComponent } from './components/layout/slider/slider.component';
@NgModule({
  declarations: [
    TopbarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainNavigationComponent,
    SliderComponent,
  ],
  imports: [CommonModule],
  exports: [
    TopbarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainNavigationComponent,
    SliderComponent,
  ],
})
export class SharedModule {}

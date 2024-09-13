import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// importaciones de componentes
import { BgThemeComponent } from './components/bg-theme/bg-theme.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// importaciones de Paginas
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { from } from 'rxjs';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToArrayPipe } from './pipes/to-array.pipes';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,

    BgThemeComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    PaginationComponent,

    ToArrayPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,

    BgThemeComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    PaginationComponent,
    ToArrayPipe,

  ]
})
export class SharedModule { }

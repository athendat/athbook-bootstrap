// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Third's Modules
import { CarouselModule } from 'ngx-owl-carousel-o';

// Modules
import { SharedModule } from './../../../shared/shared.module';

// Component
import { HomeComponent } from './home.component';

// Routes
import { HOME_ROUTES } from './home.routing';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CarouselModule,
        RouterModule.forChild(HOME_ROUTES),
        SharedModule,
    ]
})
export class HomeModule { }

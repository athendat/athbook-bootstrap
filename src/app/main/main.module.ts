// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';

// Component
import { MainComponent } from './main.component';

// Routes
import { MAIN_ROUTES } from './main.routing';


@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        RouterModule.forChild(MAIN_ROUTES),
        SharedModule,
    ],
})
export class MainModule { }

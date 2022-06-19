import { AppComponent } from './app.component';
// Angular Modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// App routes
export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },


    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    },

];


// Angular Modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// Component
import { HomeComponent } from './home.component';

// Home routes
export const HOME_ROUTES: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
    },

];


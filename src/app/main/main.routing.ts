// Angular Modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// Component
import { MainComponent } from './main.component';

// Main routes
export const MAIN_ROUTES: Routes = [


    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
        ]
    },

];


// Angular Modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    exports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ]
})
export class SharedModule { }

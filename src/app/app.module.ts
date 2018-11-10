import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FactoryModule } from './factory/factory.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppFormsModule } from './forms/app-forms/app-forms-module';
import { ReduxModule } from './redux/redux.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routing/app-routing-module';
import { AppChangeDetectionModule } from './change-detection/change-detection-module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        AppChangeDetectionModule,
        FactoryModule,
        ReduxModule,
        FormsModule,
        AppFormsModule,
        CommonModule,
        RouterModule.forRoot([], { enableTracing: false }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

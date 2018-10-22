import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FactoryModule } from './factory/factory.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppFormsModule } from './forms/app-forms/app-forms-module';
import { ReduxModule } from './redux/redux.module';
import { AppRoutingModule } from './routing/app-routing-module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FactoryModule,
        ReduxModule,
        FormsModule,
        AppFormsModule,
        RouterModule.forRoot([], { enableTracing: false })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

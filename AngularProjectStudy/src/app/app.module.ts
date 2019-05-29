import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {DirectivesNgStyleComponent} from './directives-ng-style/directives-ng-style.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgModule} from '@angular/core';
import {StringInterpolationComponent} from './string-interpolation/string-interpolation.component';
import {TwoWayDataBindingComponent} from './two-way-data-binding/two-way-data-binding.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import { DirectivesNgClassComponent } from './directives-ng-class/directives-ng-class.component';
import { DirectivesNgIfComponent } from './directives-ng-if/directives-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    DirectivesNgStyleComponent,
    DirectivesNgClassComponent,
    DirectivesNgIfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

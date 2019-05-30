import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {DirectivesNgStyleComponent} from './directives-ng-style/directives-ng-style.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgModule} from '@angular/core';
import {StringInterpolationComponent} from './string-interpolation/string-interpolation.component';
import {TwoWayDataBindingComponent} from './two-way-data-binding/two-way-data-binding.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import { NgClassComponent } from './ng-class/ng-class.component';
import { DirectivesNgIfComponent } from './directives-ng-if/directives-ng-if.component';
import { SubNgIfComponent } from './directives-ng-if/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    DirectivesNgStyleComponent,
    NgClassComponent,
    DirectivesNgIfComponent,
    SubNgIfComponent,
    NgForComponent,
    NgForFormComponent
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
    MatRadioModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

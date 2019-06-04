import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgModule } from '@angular/core';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgForFormComponent,
    NgStyleComponent,
    StringInterpolationComponent,
    SubNgIfComponent,
    TwoWayDataBindingComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDividerModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

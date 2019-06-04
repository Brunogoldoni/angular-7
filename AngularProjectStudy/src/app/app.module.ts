import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClientComponent } from './input-binding/client/client.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { InputBindingComponent } from './input-binding/input-binding.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgModule } from '@angular/core';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ChildItemComponent,
    EventComponent,
    EventBindingComponent,
    InputBindingComponent,
    NgClassComponent,
    NgContainerComponent,
    NgContentComponent,
    NgIfComponent,
    NgForComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgStyleComponent,
    StringInterpolationComponent,
    SubNgIfComponent,
    TwoWayDataBindingComponent,

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

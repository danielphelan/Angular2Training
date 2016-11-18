import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Hello }   from './Components/app.componentHello';
import { Counter }   from './Components/app.componentEvent';
import { CounterTwoWay }   from './Components/app.componentTwoWayBinding';
import { MyExampleForm }   from './Components/app.componentFormChild';

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule, FormsModule ],
  declarations: [ Hello, Counter, CounterTwoWay,MyExampleForm ],
  bootstrap:    [ Hello, Counter, CounterTwoWay,MyExampleForm ]

})

export class AppModule { }

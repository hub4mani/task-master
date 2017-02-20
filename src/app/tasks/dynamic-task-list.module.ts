import {NgModule } from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';

import {CreateUserComponent} from './create-user/create-user.component'
import {MakePaymentComponent} from './make-payment/make-payment.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [MakePaymentComponent, CreateUserComponent]
})
export class DynamicTaskListModule {}

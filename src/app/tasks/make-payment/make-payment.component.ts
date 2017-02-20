import { Component, Input} from '@angular/core'

@Component({
  selector: 'app-age',
  template: '<div>My age is {{age}}!</div>'
})
export class MakePaymentComponent {
  @Input() public age: number;
};

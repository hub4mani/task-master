import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  template: '<div>My name is {{name}}!</div>'
})
export class CreateUserComponent {
  @Input() public name: string;
};

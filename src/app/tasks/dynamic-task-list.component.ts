import {
  Component, Input, ReflectiveInjector, ViewContainerRef, Compiler, ModuleWithComponentFactories,
  OnInit, ViewChild
} from '@angular/core';

import {DynamicTaskListModule} from './dynamic-task-list.module'
import {CreateUserComponent} from './create-user/create-user.component'
import {MakePaymentComponent} from './make-payment/make-payment.component'

@Component({
  selector: 'app-dynamic',
  template: '<h4>Dynamic Components</h4><br>'
})
export class DynamicTaskListComponent implements OnInit {

  factory: ModuleWithComponentFactories<DynamicTaskListModule>;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) { }

  ngOnInit() {
    if (!this.factory) {
      const dynamicComponents = {
        sayName1: {comp: CreateUserComponent, inputs: {name: 'Andrew Wiles'}},
        sayAge1: {comp: MakePaymentComponent, inputs: {age: 30}},
        sayName2: {comp: CreateUserComponent, inputs: {name: 'Richard Taylor'}},
        sayAge2: {comp: MakePaymentComponent, inputs: {age: 25}}};
      this.compiler.compileModuleAndAllComponentsAsync(DynamicTaskListModule)
        .then((moduleWithComponentFactories: ModuleWithComponentFactories<DynamicTaskListModule>) => {
          this.factory = moduleWithComponentFactories;
          Object.keys(dynamicComponents).forEach(k => {
            this.add(dynamicComponents[k]);
          })
        });
    }
  }

  addNewName(value: string) {
    this.add({comp: CreateUserComponent, inputs: {name: value}})
  }

  addNewAge(value: number) {
    this.add({comp: MakePaymentComponent, inputs: {age: value}})
  }

  add(comp: any) {
    const compFactory = this.factory.componentFactories.find(x => x.componentType === comp.comp);
    // If we don't want to hold a reference to the component type, we can also say: const compFactory = this.factory.componentFactories.find(x => x.selector === 'my-component-selector');
    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
    const cmpRef = this.vcRef.createComponent(compFactory, this.vcRef.length, injector, []);
    Object.keys(comp.inputs).forEach(i => cmpRef.instance[i] = comp.inputs[i]);
  }
}

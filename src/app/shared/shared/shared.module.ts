import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistDirective } from '@shared/directives/checklist.directive';



@NgModule({
  declarations: [ChecklistDirective],
  imports: [
    CommonModule
  ],
  exports: [ChecklistDirective]
})
export class SharedModule { }

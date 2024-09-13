import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {

@Input()
public page: number = 1;

@Input()
public totalPages: number = 0;

@Output()
public onValue: EventEmitter<number> = new EventEmitter<number>();


emitValue( pageNumber: number ): void {
  this.onValue.emit( pageNumber );
}





}

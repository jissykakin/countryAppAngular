import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'

})
export class SearchBoxComponent implements OnInit, OnDestroy {

private debouncer: Subject<string> = new Subject<string>();
private debouncerSuscripcion?: Subscription;

@Input()
  public placeholder: string = ''

@Input()
  public initialValue: string = ''



  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscripcion = this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe( value => {
      console.log(value);
      this.onDebounce.emit( value );
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscripcion?.unsubscribe();
  }

  emitValue( value : string ): void {
     this.onValue.emit( value );
  }

  onKeyPress ( searchTerm : string ){
    this.debouncer.next ( searchTerm );
  }

}

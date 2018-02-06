import { Component, EventEmitter, Input, Output, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'razor-item',
    template: `<div class="col-md-6" style="background: red;" *ngIf="showContent()">
                    <h1>{{title}}</h1>
                    <ng-container [ngTemplateOutlet]="template"></ng-container>
                    <button (click)="showNext.emit(index)" >Show next </button>
                    <button (click)="closeView.emit(index)" >Close {{index}}</button>
                </div>
              `
})
export class RazorItemComponent {
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    @Output()
    public closeView: EventEmitter<number> = new EventEmitter<number>();
    public showNext: EventEmitter<number> = new EventEmitter<number>();
    public index: number = 0;
    @Input()
    public visible: boolean = false;
    @Input()
    public default: boolean = false;
    @Input()
    public title: string = '';

    showContent() {
        return this.visible === true || this.default === true;
    }
}

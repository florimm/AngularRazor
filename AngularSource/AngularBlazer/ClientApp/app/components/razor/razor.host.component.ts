import { Component, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { RazorItemComponent } from './razor.item.component';

@Component({
    selector: 'razor-host',
    template: `<div class="container-fluid">
                    <div class="row">
                        <ng-content></ng-content>
                    </div>
                </div>`
})
export class RazorHostComponent implements AfterContentInit {
    @Output()
    public closeItem: EventEmitter<RazorItemEvent> = new EventEmitter<RazorItemEvent>();

    @ContentChildren(RazorItemComponent) rItems: QueryList<RazorItemComponent>;
    ngAfterContentInit() {
        this.rItems.map((item, index) => {
            item.index = index;
            item.closeView.subscribe((c: any) => {
                this.toggleView(c, true);
            });

            item.showNext.subscribe((c: number) => {
                this.toggleView(c+1, false);
            })
        });
    }

    toggleView(index: number, close: boolean) {
        if (this.rItems.length > (index)) {
            const rItem = <RazorItemComponent>this.rItems.find(t=> t.index === index);
            if(close === true) {
                debugger;
                const event= new RazorItemEvent();
                event.index = index;
                event.name = rItem.title;
                this.closeItem.emit(event);
            }
            rItem.visible = !rItem.visible;
        }
    }
}

export class RazorItemEvent {
    public index: number;
    public name: string;
}

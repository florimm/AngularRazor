import { Component } from '@angular/core';

@Component({
    selector: 'blazer-page',
    templateUrl: './blazerpage.component.html'
})
export class BlazerPageComponent {
    public visibleTest2: boolean = false;
    public daaa = Date.now();

    public toggleTest2() {
        this.visibleTest2 = !this.visibleTest2;
    }

    onCloseItem(event: any) {
        debugger;
        console.log('event', event);
    }
}

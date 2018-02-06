import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'razor-test',
    template: `<h1>{{daaa}}</h1>`
})
export class RazorTestComponent implements OnInit {
    public daaa = Date.now();

    ngOnInit() {
        this.daaa = Date.now();
    }
}

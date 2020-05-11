import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-lazy-component',
    templateUrl: './lazy-component.component.html',
    styleUrls: [
        './lazy-component.component.html'
    ]
})
export class LazyComponent implements OnInit {
    messageId: number = 0;

    ngOnInit() {
        this.messageId = Math.floor(Math.random() * 10);
    }
}
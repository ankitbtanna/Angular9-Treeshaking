import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent {
    title: string = 'Home Component!';

    @ViewChild('lazycomponent', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(
        private injector: Injector, 
        private cfr: ComponentFactoryResolver
        ) {}

    addComponent() {
        import('../lazy-component/lazy-component.component').then((m) => {
            const comp = m.LazyComponent;

            const factory = this.cfr.resolveComponentFactory(comp);

            // const compRef = 
            this.viewContainer.createComponent(factory, null, this.injector);

            // const compInstance = compRef.instance;
            // compInstance.messageId = 123;
        });
    }
}
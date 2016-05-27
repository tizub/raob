import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HeaderComponent} from './header.component';
import {AccueilComponent} from "./accueil.component";
import {AOService} from './ao.service';
import {AOListeComponent} from "./ao-liste.component";
import {AODetailComponent} from "./ao-detail.component";

@Component({
	selector: 'raob-app',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, AOService]
})
@RouteConfig([
    {
        path: '/accueil',
        name: 'Accueil',
        component: AccueilComponent,
        data: {label: 'Accueil'},
        useAsDefault: true
    }, {
		path: '/ao/liste',
		name: 'AO-liste',
		component: AOListeComponent,
        data: {label: 'Liste des AO', sublabel: 'AO en cours'}
	}, {
        path: '/ao/detail',
        name: 'AO-detail',
        component: AODetailComponent,
        data: {label: 'Détail de l\'AO'}
    }
])
export class RAObayAppComponent {
    currentRouteData: Object;

    constructor(private router: Router) {
        this.router.subscribe(() => {
            this.currentRouteData = this.router.currentInstruction.component.routeData.data;
        });
    }
}
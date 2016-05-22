import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HeaderComponent} from './header.component';
import {AccueilComponent} from "./accueil.component";
import {AOService} from './ao.service';
import {AOListComponent} from "./ao-list.component";
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
        useAsDefault: true
    }, {
		path: '/ao/liste',
		name: 'AO-liste',
		component: AOListComponent
	}, {
        path: '/ao/detail/:id',
        name: 'AO-detail',
        component: AODetailComponent
    }
])
export class RAObayAppComponent { }
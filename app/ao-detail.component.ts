import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

import {AO} from './beans/ao';
import {AOService} from './ao.service';

@Component({
	selector: 'raob-ao-detail',
	templateUrl: 'app/ao-detail.component.html'
})
export class AODetailComponent implements OnInit {
    ao: AO;

    constructor(
        private aoService: AOService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.aoService.getItemFromId(id).then(response => this.ao = response);
    }

    retour() {
        window.history.back();
    }
}
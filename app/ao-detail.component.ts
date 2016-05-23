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
    navigated: boolean;

    constructor(
        private aoService: AOService,
        private routeParams: RouteParams) {}

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            this.navigated = true;
            let id = +this.routeParams.get('id');
            this.aoService.getItemFromId(id).then(response => this.ao = response);
        } else {
            this.navigated = false;
            this.ao = new AO();
        }
    }

    save() {
        this.aoService.save(this.ao).then(ao => this.ao = ao);
        this.retour();
    }

    retour() {
        window.history.back();
    }
}
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AOService} from './ao.service';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from "ag-grid/main";

@Component({
	selector: 'raob-ao-list',
	template: `
		<ag-grid-ng2 #agGrid class="ag-fresh" [gridOptions]="gridOptions"
		    (rowClicked)="detail($event)">
		</ag-grid-ng2>
		`,
    directives: [AgGridNg2]
})
export class AOListComponent implements OnInit {
    self = this;
    columnDefs = [
        {headerName: 'Titre', field: "titre"},
        {headerName: 'Client', field: "client"},
        {headerName: 'Date de réception', field: "dateReception"},
        {headerName: 'Date de réponse', field: "dateReponse"}
    ];
    gridOptions: GridOptions;

    constructor(private router: Router,
                private aoService: AOService) {
        this.aoService = aoService;
        this.gridOptions = {
            columnDefs: this.columnDefs,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true/*,
            onRowClicked: this.detail*/
        };
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        return this.aoService.getList().then(response => this.gridOptions.api.setRowData(response));
    }

    detail(event: any) {
        this.router.navigate(['AO-detail', {id: event.data.id}]);
    }
}
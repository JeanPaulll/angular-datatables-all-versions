import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableResource, FilterableField} from 'angular-datatables-all-versions';

@Component({
    selector: 'app-data-table-demo-6',
    templateUrl: './data-table-demo6.html',
    styleUrls: ['./data-table-demo6.css']
})
export class DataTableDemo6Component {
    filterableFields: FilterableField[] | any = [
        {dataType: 'date', property: 'year', header: 'Year'},
        {dataType: 'text', property: 'maker', header: 'Maker'},
        {
            dataType: 'enum', property: 'model', header: 'Model',
            possibleOptions: ['BMW', 'Golf', 'Mazda',
                {value: 'mitsubishi', displayText: 'Mitsu bishi'},
                'Mercedes', 'Honda', 'Nissan', 'KIA']
        },
        {dataType: 'number', property: 'price', header: 'Price ($)'},
        {dataType: 'bool', property: 'action', header: 'Action'}
    ];

    yearLimit = 1999;
    carResource = new DataTableResource([]);
    cars = [];
    carCount = 0;

    @ViewChild(DataTable) carsTable: DataTable;

    constructor() {
        this.rowColors = this.rowColors.bind(this);

        this.carResource.count().then(count => this.carCount = count);
    }

    reloadCars(params) {
        this.carResource.query(params).then(cars => this.cars = cars);
    }

    // custom features:
    carClicked(car) {
        alert(car.model);
    }

    rowColors(car) {
        if (car.year >= this.yearLimit) {
            return 'rgb(255, 255, 197)';
        }
    }

    filterChanged(filters) {
        console.log('Filters changed: ');
        console.log(filters);
    }

    filterAdded(filter) {
        console.log('Filters added: ');
        console.log(filter);
    }

    filterRemoved(filter) {
        console.log('Filters removed: ');
        console.log(filter);
    }

    filterUpdated(filter) {
        console.log('Filters updated: ');
        console.log(filter);
    }

    buttonClicked($event: MouseEvent) {
        console.log('buttonClicked', $event);
        console.log($event);
    }
}

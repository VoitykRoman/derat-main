import { Component, OnInit } from '@angular/core';
import { Perimeter } from '../../models/perimeter.model';
import { IComboSelectionChangeEventArgs } from 'igniteui-angular';
import { User } from 'src/app/main/models/user.model';
import { PerimeterService } from '../../services/perimeters.service';
import { ActivatedRoute } from '@angular/router';
import { TrapService } from '../../services/trap.service';

@Component({
    selector: "app-create-trap",
    templateUrl: "./create-trap.component.html"
})
export class CreateTrapComponent implements OnInit {
    types = [
        { type: 'mechanical' },
        { type: 'glue' }
    ];

    selectedPlace;
    selectedType;

    selectedComment

    employeesToShow;
    selectedEmployee;
    employees: User[];

    public task: Task = new Task(10);

    public date: Date = new Date(Date.now());

    private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
    private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

    obs;
    perimeter: Perimeter;
    constructor(private perimeterService: PerimeterService,
        private route: ActivatedRoute,
        private trapService: TrapService) {
    }

    ngOnInit() {
        const perimeterId = +this.route.snapshot.paramMap.get('id');
        this.obs = this.perimeterService.getPerimeterById(perimeterId);
        const perimeterPromise = this.perimeterService.getPerimeterById(perimeterId).toPromise();
        perimeterPromise.then((e: Perimeter) => {
            this.perimeter = e;
        })
    }

    public updateTask(event) {
        if (!isNaN(parseInt(event.value, 10))) {
            this.task.completion = event.value;
        } else {
            event.value = this.task.completion;
        }
    }

    public setWeaponsLimit(event: IComboSelectionChangeEventArgs) {
        if (event.newSelection.length > 1) {
            event.cancel = true;
        }
    }

    createTrap() {
        const body = {
            type: this.selectedType[0],
            comment: this.selectedComment,
            place: this.selectedPlace,
            perimeterId: this.perimeter.id,
            employeeId: this.perimeter.employee.id,
            endDate: this.date,
            reviewEveryDays: this.task.completion
        }
        this.trapService.createTrap(body).toPromise().then(e => {
            location.reload();
        })
    }
}

class Task {
    constructor(
        public completion: number
    ) {
    }
}
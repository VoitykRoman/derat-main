import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { UserService } from 'src/app/main/services/user.service';
import { first } from 'rxjs/operators';
import { TranslateService } from 'src/app/services/translate.service';

@Component(
    {
        selector: 'app-create-user',
        templateUrl: 'create-user.component.html',
        styleUrls: ['./create-user.component.scss']
    })
export class CreateUserComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
    success = '';

    public selectedRole;
    public roles = [
        {
            name: 'Client',
            value: 'client'
        },
        {
            name: 'Employee',
            value: 'employee'
        },
        {
            name: 'Admin',
            value: 'admin'
        }
    ]
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        public translateService: TranslateService 
    ) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
@Output() onCreate = new EventEmitter<any>();
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        let user = this.registerForm.value;
        user.role = this.selectedRole;
        this.loading = true;
        this.userService.register(user)
            .pipe(first())
            .subscribe(
                data => {
                    this.success = 'Registration successful';
                   this.onCreate.emit();
                },
                error => {
                    this.error = error.error;
                    this.loading = false;
                });
    }
}

import { FormControl } from '@angular/forms';

export class NameValidator {

    constructor() {
    }

    static lastNameValidator(control: FormControl) {
        let names = control.value.toString().trim().split(' ');
        if (!names || names.length < 2) return { lastName: true };
        return null;
    }
}
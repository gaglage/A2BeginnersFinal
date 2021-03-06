import { FormControl } from '@angular/forms';

export class PasswordValidators {

    static matchPassword(control: FormControl) {
        console.log(control)
        if (control.value != "") {
            return { dontMatch: true }
        }
        return null;
    }

    static shouldBeUnique(control: FormControl) {
        return new Promise((resolve, reject) => {
            //simulate a connection to server
            setTimeout(() => {
                if (control.value == 'gabi') {
                    resolve({ shouldBeUnique: true })
                } else {
                    resolve(null)
                }
            }, 1000)
        })
    }
    static cannotContainSpace(control: FormControl) {
        console.log(control);
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

}
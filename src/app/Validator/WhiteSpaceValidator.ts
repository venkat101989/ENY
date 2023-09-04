import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';  

export class WhiteSpaceValidator
{
    static cannotContainSpace(control: FormControl) : ValidationErrors | null {  

        if(control.value != null)
        {
            if((control.value as string).indexOf(' ') >= 0){  
                return {cannotContainSpace: true}  
            }  
        }   
    
        return null;  
    }
}
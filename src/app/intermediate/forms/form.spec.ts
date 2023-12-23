import { FormBuilder } from "@angular/forms";
import { FormRegister } from "./form";



describe('Formularios', () => {
    let component: FormRegister

    beforeEach(() => {
        component = new FormRegister(new FormBuilder()); 
    }); 

    it('Debe de crear un formulario con dos campos', () => {


        expect(component.form.contains('email')).toBeTruthy(); 
        expect(component.form.contains('email')).toBeTruthy(); 
    }); 


    it('El email debe ser obligatorio', () => {
        const control = component.form.get('email');
        control?.setValue('adanch22@gmail.com'); 


        expect(control?.valid).toBeTruthy();
    }); 

}); 
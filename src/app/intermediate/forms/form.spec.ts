import { FormBuilder } from "@angular/forms";
import { FormRegister } from "./form";



describe('Formularios', () => {
    let component: FormRegister

    beforeEach(() => {
        component = new FormRegister(new FormBuilder()); 
    }); 

    it('Debe de crear un formulario con dos campos', () => {


        expect(component.form.contains('email')).toBeTruthy(); 
        expect(component.form.contains('password')).toBeTruthy(); 
    }); 
}); 
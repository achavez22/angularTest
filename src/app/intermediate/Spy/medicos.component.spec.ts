import { empty, from, Observable, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
 
 
describe('Medicos Component', () => {
 
    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);
 
    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });
 
 
    it('Init: Debe cargar los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];
 
        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return from([medicos]);
        })
 
        componente.ngOnInit();
 
        expect(componente.medicos.length).toBeGreaterThan(0);
    });
 
    it('Debe llamar al servidor para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(()=> new Observable());
 
        componente.agregarMedico();
 
        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar medico al arreglo de medicos', () => {
        const medico = { id: 1, nombre: 'adan'};

        spyOn(servicio, 'agregarMedico')
            .and.returnValue(from([medico]));

        componente.agregarMedico();
        expect(componente.medicos.length).toBe(1);

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });


    it('Si falla la adicion del medico, la porpiedad de mensajeError, debe ser igual al error', () => {
        const myError = 'No se puede agregar el medico'; 

        spyOn(servicio, 'agregarMedico').and
            .returnValue(throwError(myError));
    });


    it('debe llamar al servidor para borrar un medico ', () => {

        spyOn(window, 'confirm')
            .and.returnValue(true);
            
        const spy = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        expect(spy).toHaveBeenCalledWith('1');
    });

    it('no debe llamar al servidor para borrar un medico ', () => {

        spyOn(window, 'confirm')
            .and.returnValue(false);
            
        const spy = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        expect(spy).not.toHaveBeenCalledWith('1');
    });
});
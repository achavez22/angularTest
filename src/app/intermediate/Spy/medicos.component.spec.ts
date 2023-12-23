import { from, of } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
 
 
describe('MedicosComponent', () => {
 
    let componente: MedicosComponent;
    const url:string = 'http'; 
    let servicio: MedicosService;
 
    beforeEach( () => {
        const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
        servicio = new MedicosService(spy);
        componente = new MedicosComponent(servicio);
    });
 
 
    it('Init: Debe de cargar los médicos', () => {
 
        const medicos = ['medico1', 'medico2', 'medico3','medico4'];
 
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [ medicos ] );
        });
 
 
        componente.ngOnInit();
 
        expect( componente.medicos.length ).toBeGreaterThan(0);
 
   
    });
 
 
});
 
import { MedicoComponent } from 'src/app/intermediate2/medico/medico.component';
import { ROUTES } from './app.routes';


describe('Rutas principales', () => {


    it('debe de exitir la ruta /medico/:id' , () => {
        expect(ROUTES).toContain({path: 'medicos/:id', component: MedicoComponent})
    });
});
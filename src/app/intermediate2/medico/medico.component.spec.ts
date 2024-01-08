import { HttpClientModule } from "@angular/common/http";
import { MedicoService } from "../medico.service";
import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";


describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent], 
            providers: [MedicoService], 
            imports: [HttpClientModule], 
        });
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el saludo del medico ', () => {
        const name = ' Adan '; 
        const resp = component.saludarMedico(name);


        expect( resp ).toContain(name);
    }); 
});
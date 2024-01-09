import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe Mostrar la leyenda', () => {
        component.leyenda = 'Progress loading';

        fixture.detectChanges();// disparar la teccion de errres. 
        const elem = fixture.debugElement.query(By.css('h3')).nativeElement; 

        expect(elem.innerHTML).toContain('Progress loading');
    });


    it('Debe de mostrar en el input el valor de progreso.', ()=> {
    
        component.cambiarValor(5);
        fixture.detectChanges();// disparar la teccion de errres. 

        fixture.whenStable().then(()=> {
            const input = fixture.debugElement.query(By.css('input')).nativeElement; 
            const elem = input.nativeElement;
            console.log(elem);
            
    
            expect(elem.value).toBe('45');
        
        });

    });

    it('Debe de incrementar/decrementar el valor en 5 con click en el boton.', ()=> {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);

        expect(component.progreso).toBe(45);
    });


    it('En el titulo del componente debe mostrarse el progreso', ()=> {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();
        const elem = fixture.debugElement.query(By.css('h3')).nativeElement; 

        expect(elem.innerHTML).toContain('45');
        
    });

    
});

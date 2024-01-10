import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterTestingModule.withRoutes([])], 
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });



  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet))

  });


  xit('Debe de tener un link a la pagina de Medicos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    //  console.log(elements);
    let exist = false;

    for (const element of elements) {
      if (element.attributes['routerLink'] === '/medicos') {
        exist = true;
        break;
      }

    }

    expect(exist).toBeTruthy();


  });

});

import { incrementar } from "./numbers";



describe('Pruebas de números', () => {

    it('debe retornar 100, si el num ingresado es mayor a 100', () => {
       const resp = incrementar(300); 
       expect(resp).toBe(100);
    })


    it('debe retornar el numero ingresado mas 1 si es menor de 100', () => {
        const resp = incrementar(50); 
        expect(resp).toBe(51);
     })
 

});
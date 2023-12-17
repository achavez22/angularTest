import { userInput } from "./booleans";



describe('Pruebas de Booleans ', () => {

    it('Debe de retornar true', () => {
        const resp = userInput(); 

        expect(resp ).toBeTruthy();
    });
}); 
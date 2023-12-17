import { getRobots } from "./arrays";



describe('Pruebas de arreglos', () => {

    it('debe retornar por lo menos 3 elementos ', () =>{
        const resp = getRobots(); 

        // expect(resp.length).toBe(3);
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });


    it('debe existir MagaMan y Ultron', () =>{
        const resp = getRobots(); 

        // expect(resp.length).toBe(3);
        expect(resp).toContain('MegaMan');
        expect(resp).toContain('Ultron');
    });
}); 
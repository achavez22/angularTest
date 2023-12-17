import { Player } from "./class";




describe('Pruebas de clase', () => {

const player = new Player();

beforeAll(() => {
   console.log('beforeAll');
    
});
beforeEach(() => {
    // console.log('beforeEach');
    player.hp = 100;
});
afterAll(() => {
    console.log('afterAll');
});
afterEach(() => {
    console.log('afterEach');
    
});


it('Debe retornar 80 de hp, si recibe 20 de daño', () => {

    const resp = player.getHurt(20);
    expect(resp).toBe(80);

});


it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
    const resp = player.getHurt(50);
    expect(resp).toBe(50);

});


it('Debe retornar 0 de hp, si recibe 100 de daño', () => {
    const resp = player.getHurt(100);
    expect(resp).toBe(0);

});

});
import { Player2 } from "./player2";



describe('Jugador 2 Emit', () => {

    let player: Player2; 


    beforeEach(() => {
        player = new Player2(); 
    });


    it('should emit an event when the player is hurt', () => {
        let newHp = 0;
        player.hpChange.subscribe(hp => {
            newHp = hp;
        });

        player.getHurt(1000);

        expect(newHp).toBe(0); 
    });

    it('should emit an event when the player is hurt but its ok', () => {
        let newHp = 0;
        player.hpChange.subscribe(hp => newHp = hp);

        player.getHurt(50);

        expect(newHp).toBe(50); 
    });


});
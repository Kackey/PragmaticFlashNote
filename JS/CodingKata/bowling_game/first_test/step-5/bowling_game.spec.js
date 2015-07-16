describe ('Bowling', function(){
    describe ('Gutter Game', function(){
        it ('should have game object.', function(){
            var game = BowlingGame.create();
            for (var i=0; i<20; i++){
                game.roll(0);
            }
            expect(game.score()).toEqual(0);
        });
    });
});
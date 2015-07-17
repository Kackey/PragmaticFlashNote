describe ('[GRAMMAR]->Closure', function(){

    describe ('Basic Sample', function(){
        beforeEach( function(){

        });
        it ('can hold the status and increment number by each calling.', function(){
            function incrementer(){
                var x = 0;
                return function (){ // <- This is "Closure".
                    x = x+1;
                    return x;
                };
            };
            var incrementer = incrementer();

            expect(incrementer() ).toEqual(1);
            expect(incrementer() ).toEqual(2);
            expect(incrementer() ).toEqual(3);
        })

    })
})
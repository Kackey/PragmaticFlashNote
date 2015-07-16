describe('[Step-4]: Define expect for name() getter on Seminar obj in spec. (-> fail)', function(){
    describe('Seminar', function(){
        it('should have a name', function(){
            var seminar = Seminar.create('Javascript-Basics');
            expect(seminar.name() ).toEqual('Javascript-Basics');
        });
    });
});

// TypeError: seminar.name is not a function
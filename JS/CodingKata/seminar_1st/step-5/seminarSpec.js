describe('[Step-5]: Define name() func in src. (-> pass)', function(){
    describe('Seminar', function(){
        it('should have a name', function(){
            var seminar = Seminar.create('Javascript-Basics');
            expect(seminar.name() ).toEqual('Javascript-Basics');
        });
    });
});

// TypeError: seminar.name is not a function
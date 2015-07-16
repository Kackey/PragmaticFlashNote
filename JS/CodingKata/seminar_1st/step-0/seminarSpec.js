describe('[Step-0]: Call SUT(Subject Under Test) object in spec. (-> fail)', function(){
    describe('Seminar', function(){
        it('should have a name', function(){
            Seminar.create('Javascript-Basics');
        });
    });
});

// ReferenceError: Seminar is not defined
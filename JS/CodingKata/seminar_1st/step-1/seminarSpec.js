describe('[Step-1]: Define object in src. (-> fail)', function(){
    describe('Seminar', function(){
        it('should have a name', function(){
            Seminar.create('Javascript-Basics');
        });
    });
});

// TypeError: Seminar.create is not a function
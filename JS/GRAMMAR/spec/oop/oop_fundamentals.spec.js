/**
 * Created by hidekazu.kakinuma on 2015/03/26.
 */


describe('OOP ', function(){
    describe ('-> Concept of "constructor"', function(){
        it ('Constructor ', function(){
            // p.246 "プロになるためのJavaScript入門"
            var str = new String;
            str = "Hello World!.";

            // Returns function();
            str.split;
            str.split();
        });
    });

    describe('-> Scope for Variables in Constructor', function(){
        // p.253 "プロになるためのJavaScript入門"
        beforeEach( function() {
            function ClassScope() {
                this.public = 1;
                var private_variable = 2;

                function private_function() {
                };
            };
            class_scope = new ClassScope;
        });

        it ('"this" variables in constructor is public.', function(){
            expect(class_scope.public).toEqual(1);
        });

        it ('Variables declared in constructor is encapsulated.', function(){
            expect(class_scope.private_variable).toEqual(undefined);
            expect(class_scope.private_function).toEqual(undefined);
        });
    });

    // ToDo: Making object using constructor (=make instance from class)
    describe ('-> Make Object Using Constructor (Instance from Class)', function(){

    });
});
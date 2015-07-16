/**
 * Created by hidekazu.kakinuma on 2015/03/26.
 */

describe('[GRAMMAR]->native', function(){
    describe('Primitive values:', function(){

        it ('directly have value, NOT reference.', function(){
            var original = 1;
            var copied = original;

            // Will the change for "copied" will be reflected to "original"?
            copied++;

            expect(original).toEqual(1);
            expect(copied).toEqual(2);
        });
    });
});




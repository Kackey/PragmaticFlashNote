/**
 * Created by hidekazu.kakinuma on 2015/03/13.
 */


browser.ignoreSynchronization = true;

var CsrDonation_page = function(){
    this.get = function(){browser.get('http://corp.rakuten.co.jp/csr/contribution/');};
    this.url = function(){ return browser.getLocationAbsUrl();};
    this.title = function(){ return browser.getTitle();};

/*    this.donations = function(){
        var donations = [];
        $$("h3").each(function (element, index){
            element.getText().then(function (text){
                donations.push(text);
                console.log(donations);
            });
        });

        return donations;
    };*/

    var accumulator = function (acc, elem){
        return elem.getText().then(function (text){
            console.log(acc);
            return acc.push(text);
        });
    };

    var initial_val = [];
    this.donations = function(){
        return $$("h3").reduce(accumulator, initial_val);
    };

    this.should = {
        title: '【楽天株式会社】社会貢献活動│楽天クラッチ募金',
        url: 'http://corp.rakuten.co.jp/csr/contribution/'
    }
};

var p = ""; // for Page Object

describe('Tsubasa donation', function(){

    beforeEach(function(){
        var dummy = "dummy";
    });

    it ('can show parent page.', function(){
        p = new CsrDonation_page();
        p.get();
        expect(p.title()).toEqual(p.should.title);
    });

    it ('is linked from parent page.', function(){
        expect(p.donations()).toContain('公益財団法人楽天未来のつばさ');
     });

});

var Seminar = {
    _name: '',
    create: function(name) {
        return Object.create(Seminar).init(name);
    },
    init: function(name){
        this._name = name;
        return this;
    },
    name: function(){
        return this._name;
    }
};
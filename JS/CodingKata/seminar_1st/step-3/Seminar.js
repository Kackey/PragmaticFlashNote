var Seminar = {
    create: function(name) {
        return Object.create(Seminar).init(name);
    },

    init: function(name){
        return this;
    }
};
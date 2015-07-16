var Seminar = {
    create: function(name) {
        return Object.create(Seminar).init(name);
    }
};

// TypeError: Object.create(...).init is not a function at Object.Seminar.create
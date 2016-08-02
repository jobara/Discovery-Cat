(function($, fluid) {
    "use strict";
    fluid.defaults("demo.prefModel", {
        gradeNames: "fluid.modelComponent",
        model: {
            lang: {
                type: "en-US",
                obj: {}
            },
            count: 0,
            size: 1,
            contrast: false,
            simplify: false,
            sound: false,
            visited: {
                sound: false,
                size: false,
                color: false,
                simplify: false,
                house: false
            },
            position: {
                catHousex: 70,
                catHousey: 45,
                catx: 235,
                caty: 500
            }
        }
    });

})(jQuery, fluid);

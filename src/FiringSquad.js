/*!
 * FiringSquad.js https://github.com/piersroberts/FiringSquad 
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports) {
            root.FiringSquad = factory(root, exports);
        });
    } else if (typeof exports !== 'undefined') {
        factory(root, exports);

    } else {
        root.FiringSquad = factory(root, {});
    }
}(this, function(root, FiringSquad) {
    FiringSquad = (function() {
        "use strict";
        var self = {};
        self.getMetaNameValue = function(name) {
            for (i = 0; i < this.metas.length; i++) {
                if (this.metas[i].getAttribute('name') === name) {
                    return this.metas[i].getAttribute('content');
                }
            }
            return false;
        };
        self.getMetas = function() {
            this.metas = document.getElementsByTagName('meta');
            return self;
        };
        self.testMetaNameValue = function(name, value) {
            if (self.getMetas().getMetaNameValue(name) === value) {
                return true;
            }
            return false;
        };
        self.classExists = function(selector) {
            if (document.getElementsByClassName(selector).length) {
                return true;
            }
            return false;
        };
        self.idExists = function(id) {
            if (document.getElementById(id)) {
                return true;
            }
            return false;
        };
        self.testPath = function(path) {
            if (window.location.pathname === path) {
                return true;
            }
            return false;
        };
        self.testPathContains = function(string) {
            return !!~window.location.pathname.indexOf(string);
        };
        self.testPathBegins = function(string) {
            if (window.location.pathname.substring(0, string.length) === string) {
                return true;
            }
            return false;
        };
        self.testPathMatches = function(regex) {
            return regex.test(window.location.pathname);
        };
        self.testRandom = function(fraction) {
            if (fraction < 1) {
                return (fraction) > Math.random();
            }
            return true;
        };
        return{
            /**
             * Returns whether or not an id exists on a DOM
             * @param {String} id
             * @returns {Boolean}
             */
            id: function(id) {
                return self.idExists(id);
            },
            /**
             * Returns whether or not a class exists in a DOM
             * @param {String} className
             * @returns {Boolean}
             */
            class: function(className) {
                return self.classExists(className);
            },
            /**
             * Returns whether a meta name exists with a value
             * @param {String} name
             * @param {String} value
             * @returns {Boolean}
             */
            meta: function(name, value) {
                return self.testMetaNameValue(name, value);
            },
            /**
             * Returns whether the path of the current URL (starting with a /) matches
             * @param {String} path
             * @returns {Boolean}
             */
            pathIs: function(path) {
                return self.testPath(path);
            },
            /**
             * Tests to see if a string exists anywhere in the path of the URL
             * @param {String} path
             * @returns {Boolean}
             */
            pathContains: function(path) {
                return self.testPathContains(path);
            },
            /**
             * Tests to see the path of the URL begins with a string (remember the /)
             * @param {String} path
             * @returns {Boolean}
             */
            pathBeginsWith: function(path) {
                return self.testPathBegins(path);
            },
            /**
             * Runs a regex test on the URL path to see if it matches
             * @param {RegExp} regex
             * @returns {Boolean}
             */
            pathMatches: function(regex) {
                return self.testPathMatches(regex);
            },
            /**
             * Takes a number less than one as the probability of returning true, probability can be a fraction
             * @param {Number} odds
             * @returns {Boolean}
             */
            lucky: function(odds) {
                return self.testRandom(odds);
            }
        };
    });
    return FiringSquad;
}));

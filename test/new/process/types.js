var assert    = require("chai").assert;
var crossbow  = require("../../../index");

describe("Workign with Types", function() {

    it("Can determine a `post type` using the filepath & cwd", function(done) {

        var type = crossbow.builder({
            config: {
                cwd: "src"
            }
        }).getType("src/_posts/test.md");

        assert.equal(type, "post");

        done();
    });

    it("Can determine a `post type` using the filepath & cwd", function(done) {

        var type = crossbow.builder({
            config: {
                cwd: "src",
                dirs: {
                    "type:post": "_blog"
                }
            }
        }).getType("src/_blog/test.md");

        assert.equal(type, "post");

        done();
    });

    it("Can determine a `partial type` when type:type syntax not being used", function(done) {

        var type = crossbow.builder().getType("_layouts/test.hbs");

        assert.equal(type, "partial");

        done();
    });
});
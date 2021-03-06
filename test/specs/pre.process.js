var assert    = require("chai").assert;
var crossbow = require("../../index");

describe("Pre-processing an item", function() {

    it("should return the key", function() {

        var site = crossbow.builder();

        var item = site.preProcess({key: "src/docs/index.html", content: "<p>Shane is rad, {{page.url}}</p>"});

        assert.equal(item.get("key"),  "src/docs/index.html");
    });
    it("should return the front matter + content", function() {

        var site = crossbow.builder();

        var item = site.preProcess({key: "src/docs/index.html", content: "<p>Shane is rad, {{page.url}}</p>"});

        assert.equal(item.get("content"), "<p>Shane is rad, {{page.url}}</p>");
        assert.deepEqual(item.get("front").toJS(), {});
    });
    it("should return the parsed path", function() {

        var site = crossbow.builder();

        var item = site.preProcess({key: "src/docs/index.html", content: "<p>Shane is rad, {{page.url}}</p>"});

        var path = item.get("path").toJS();

        assert.equal(path.ext, ".html");
        assert.equal(path.base, "index.html");
        assert.equal(path.name, "index");
        assert.equal(path.dir, "src/docs");
    });
    it("should return the filepath", function() {

        var site = crossbow.builder();

        var item = site.preProcess({key: "src/about.html", content: "<p>Shane is rad, {{page.url}}</p>"});

        assert.equal(item.get("filepath"), "src/about.html");
    });
});
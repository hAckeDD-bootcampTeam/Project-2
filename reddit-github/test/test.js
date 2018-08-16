var expect = require('chai').expect;
var users = require('../users.js');
var should = require('should');
var request = require('request');
var baseURL = "https://www.reddit.com/search.json?&limit=10&sort=hot&sort=new&q='casa%20loma'";
var util = require('util');

describe('test', function () {
    it('pass because everything is ok', function () {
        expect(true).to.be.true;
    })
})

describe('printName()', function () {
    it('print the last name first', function () {
        var results = users.printName({ first: 'Elizabeth', last: 'Porter' });
        expect(results).to.equal("Porter, Elizabeth");

        var results = users.printName({ first: 'David', last: 'Lapadula' });
        expect(results).to.equal("Lapadula, David");

        var results = users.printName({ first: 'Derek', last: 'Irwin' });
        expect(results).to.equal("Irwin, Derek");

        var results = users.printName({ first: 'Angelina', last: 'Davies' });
        expect(results).to.equal("Davies, Angelina");
    });
});

describe('casa loma', function () {
    it('casa loma', function (done) {
        request.get({ url: baseURL },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            })
    })
})


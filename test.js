//(function () {

//  "use strict"

  var fs = require('fs')
  var assert = require('assert')
  var expect = require("chai").expect
  var compare = require('file-compare')

  var tokeniser = require('./tokeniser')

  describe('tokeniser', function () {

    before(function () {
      //
    })

    after(function () {
      //
    })

    describe('tokenise input', function () {


      var tokeniser_config = 'config.json'
      var src_file = 'src_html.html'
      var dest_file = 'dest_html.html'
      var check_file = 'check_html.html'

      //fs.unlinkSync(dest_file)


      it('check src file exists: '+src_file, function (done) {

        fs.stat(src_file, function(err, stat) {
          assert.ok(!err, "files test " + src_file)
          done()
        })

      })


      it('check check file exists: '+check_file, function (done) {

        fs.stat(check_file, function(err, stat) {
          assert.ok(!err, "files test " + check_file)
          done()
        })

      })


      it('run the tokeniser: ', function (done) {

        tokeniser.tokenise(tokeniser_config, src_file, dest_file, function (err) {
          assert.ok(!err, "tokeniser")
          done()
        })

      })


      it('diff dest and check file', function (done) {

        compare.compare(dest_file, check_file, function(result) {
          assert.ok(result, "compare")
          done()
        })

      })


      it('check dest file exists: '+dest_file, function (done) {

        fs.stat(dest_file, function(err, stat) {
          assert.ok(!err, "files test " + dest_file)
          done()
        })

      })

    })

  })

//}())

//(function () {

//  "use strict"

  var fs = require('fs')
  var assert = require('assert')
  var expect = require("chai").expect
  var compare = require('file-compare')

  var tokeniser = require('./index')

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
      var dst_file = 'dst_html.html'
      var chk_file = 'chk_html.html'

      //fs.unlinkSync(dst_file)


      it('check src file exists: '+src_file, function (done) {

        fs.stat(src_file, function(err, stat) {
          assert.ok(!err, "files test " + src_file)
          done()
        })

      })


      it('check chk file exists: '+chk_file, function (done) {

        fs.stat(chk_file, function(err, stat) {
          assert.ok(!err, "files test " + chk_file)
          done()
        })

      })


      it('run the tokeniser: ', function (done) {

        var config = {
          search: "%%FOO%%",
          replace: "bar",
          src_file: src_file,
          dst_file: dst_file,
        }

        tokeniser.tokenise(config, function (err) {
          assert.ok(!err, "tokeniser")
          done()
        })

      })


      it('diff dst and chk file', function (done) {

        compare.compare(dst_file, chk_file, function(result) {
          assert.ok(result, "compare")
          done()
        })

      })


      it('chk dst file exists: '+dst_file, function (done) {

        fs.stat(dst_file, function(err, stat) {
          assert.ok(!err, "files test " + dst_file)
          done()
        })

      })

    })

  })

//}())

(function () {
  "use strict"

  var replaceStream = require('replacestream')
  var fs = require('fs')
  var path = require('path')


  module.exports = {

    tokenise: function(args, callback) {

      var err

      var stream = fs.createReadStream(args.src_file)
        .pipe(replaceStream(args.search, args.replace))
        .pipe(fs.createWriteStream(args.dst_file))

      stream.on('close', function(err) {
        callback(err)
      })

    }

  }

}())

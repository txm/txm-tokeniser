(function () {
  "use strict"

  var fs = require('fs')
  var path = require('path')

  var replaceStream = require('replacestream')
  var combine = require('stream-combiner2')


  module.exports = {

    tokenise: function(args, callback) {
      var err

      var keys = Object.keys(args.tokens)

      var combined = []

      keys.forEach (function(search){
        combined.push(replaceStream(search, args.tokens[search]))
      })

      var stream = fs.createReadStream(args.src_file)
      var combined_streams = combine(combined)
      stream.pipe(combined_streams).pipe(fs.createWriteStream(args.dst_file));

      stream.on('end', function(err) {
        callback(err)
      })

    }

  }

}())

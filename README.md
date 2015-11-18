# txm-tokeniser

var config = {
  'tokens':  { 'a': 'A', 'b': 'B' },
  'src_file': 'index.template',
  'dst_file': 'index.html'
}

tokeniser.tokenise(config, function (err) {
  console.log('rock!')
})

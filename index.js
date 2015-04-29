var swarm = require('ble-swarm')
var duplexify = require('duplexify')

module.exports = function (opts) {
  var once = false
  var proxy = duplexify()

  swarm(opts, function (stream) {
    if (once) return
    once = true
    proxy.setReadable(stream)
    proxy.setWritable(stream)
  })

  return proxy
}

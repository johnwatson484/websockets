import home from '../routes/home.js'
import assets from '../routes/assets.js'
import health from '../routes/health.js'
import socket from '../routes/socket.js'

const plugin = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route([].concat(
        home,
        assets,
        health,
        socket
      ))
    },
  },
}

export default plugin

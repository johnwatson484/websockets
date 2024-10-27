const route = {
  method: 'POST',
  path: '/socket',
  config: {
    plugins: {
      websocket: { only: true, autoping: 5 * 1000 },
      crumb: false
    }
  },
  handler: (request, h) => {
    const { peers } = request.websocket()

    console.log('Received data:', request.payload)
    console.log('Connected peers:', peers.length)

    peers.forEach(peer => {
      peer.send(JSON.stringify({ ...request.payload }))
    })

    return ''
  }
}

export default route

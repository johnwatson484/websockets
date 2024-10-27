const route = {
  method: 'POST',
  path: '/socket',
  config: {
    plugins: {
      websocket: { only: true, autoping: 30 * 1000 },
      crumb: false
    }
  },
  handler: (request, h) => {
    const { ws, peers } = request.websocket()

    console.log('Received data:', request.payload)
    console.log('Connected peers:', peers.length)

    peers.forEach(peer => {
      peer.send(JSON.stringify({ message: request.payload.message }))
    })

    ws.send(JSON.stringify({ message: 'You sent a message' }))

    return ''
  }
}

export default route

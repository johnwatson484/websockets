import crypto from 'crypto'

const route = {
  method: 'POST',
  path: '/socket',
  config: {
    plugins: {
      websocket: { only: true, autoping: 120 * 1000 },
      crumb: false
    }
  },
  handler: (request, h) => {
    console.log('Received data:', request.payload)
    return { message: crypto.randomUUID() }
  }
}

export default route

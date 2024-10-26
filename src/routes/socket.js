const route = {
  method: 'POST',
  path: '/socket',
  config: {
    plugins: { websocket: { only: true, autoping: 30 * 1000 } }
  },
  handler: (request, h) => {
    return { data: 1, seen: request.payload }
  }
}

export default route

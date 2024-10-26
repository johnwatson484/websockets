import Inert from '@hapi/inert'
import Crumb from '@hapi/crumb'
import logging from './logging.js'
import errors from './errors.js'
import views from './views.js'
import router from './router.js'
import config from '../config.js'

async function registerPlugins (server) {
  const plugins = [
    Inert,
    Crumb,
    logging,
    errors,
    views,
    router,
  ]

  if (config.get('isDev')) {
    const Blipp = await import('blipp')
    plugins.push(Blipp)
  }

  await server.register(plugins)
}

export { registerPlugins }

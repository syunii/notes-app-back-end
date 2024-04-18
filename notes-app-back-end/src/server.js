// Muhammad Ramdani Nugraha
// 3220009
// uts cloud computing

const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 3003,
        host: 'localhost',
        routes:{
            cors:{
                origin: ['*'],
            },
        },
    })

    server.route(routes)

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
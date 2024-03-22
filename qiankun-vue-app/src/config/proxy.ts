export default {
    '/api': {
        target: 'http://192.168.11.111:4040/api',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
    },

    '/heibai': {
        target: 'http://192.168.11.111:4040/api',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/heibai/, ''),
    },

    '/shengfa': {
        target: 'http://192.168.11.35:4040/api',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/shengfa/, ''),
    },

    '/prod': {
        target: 'https://brain-api.ztxkol.com/api',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/prod/, ''),
    },
}

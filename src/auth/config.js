const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    UrlPrefix: isProd ? 'api/' : 'http://localhost:8000/api/'
}

export default config;

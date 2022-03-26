const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    UrlPrefix: isProd ? '/' : 'http://localhost:8000/'
}

export default config;

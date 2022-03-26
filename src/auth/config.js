const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    UrlPrefix: isProd ? null : 'localhost:8000'
}

export default config;

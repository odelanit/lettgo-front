let development = process.env.NODE_ENV !== 'production'

export default {
    server: {
        port: 80,
        host: '0.0.0.0'
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: '/css/custom.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/adifier-icons.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/owl.carousel.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/magnific-popup.css'
            },
            {
                rel: 'stylesheet',
                href: '/style.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/author.css'
            },
            {
                rel: 'stylesheet',
                href: '/style-inline.css'
            }
        ],
        script: [
            {
                src: '/js/jquery.js'
            },
            {
                src: '/js/init.js'
            },
            {
                src: '/js/bootstrap.min.js'
            },
            {
                src: '/js/profile/jquery.scrollbar.min.js'
            },
            {
                src: '/js/elements.js'
            },
            {
                src: '/js/typed.min.js'
            },
            {
                src: '/js/owl.carousel.min.js'
            },
            {
                src: '/js/jquery.magnific-popup.min.js'
            },
            {
                src: '/js/adifier-sc.js'
            },
            {
                src: '/js/compare.js'
            },
            {
                src: '/js/custom.js'
            },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    router: {
        middleware: 'i18n'
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/i18n.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: development ? 'http://localhost:8000/api': 'http://46.250.220.148:8000/api',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
}

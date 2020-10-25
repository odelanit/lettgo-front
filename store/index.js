const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
    return {
        auth: null,
        locales: ['en', 'no'],
        locale: 'no'
    }
}

export const mutations = {
    SET_AUTH (state, auth) {
        state.auth = auth
    },
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.auth);
            } catch (err) {
                console.warn('No valid cookie found')
            }
        }
        commit('SET_AUTH', auth);
    },
    logout({ commit }) {
        commit('SET_AUTH', null);
    }
}

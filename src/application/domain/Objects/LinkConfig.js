export default function buildMakeLinkConfig ({validatePassword}) {

    return function makeLinkConfig ({
        ad = null,
        password = null,
        expirationDate = null
    } = {}) {

        if (password && !validatePassword(password)) {
            throw new Error('Password must have valid format')
        }

        return Object.freeze({
            getAd: () => ad,
            getPassword: () => password,
            getExpirationDate: () => expirationDate
        })

    }

}

import cuid from 'cuid'
import passwordValidator from 'password-validator'
import validUrl from 'valid-url'
import buildMakeLink from './Link'
import buildMakeLinkConfig from './LinkConfig'
import buildMakeLinkStats from './LinkStatistic'

const makeLinkConfig = buildMakeLinkConfig({validatePassword})
const makeLinkStats = buildMakeLinkStats()
const makeLink = buildMakeLink(Id, validateUrl, urlShortener, makeLinkStats, makeLinkConfig)

export default makeLink

const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
  })

function validatePassword(password) {
    const schema = new passwordValidator()

    schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    return schema.validate(password)
}

function urlShortener(url) {
    return url // TODO: implement url shortening scheme
}

function validateUrl(url) {
    if(validUrl.isWebUri(url)) {
        return true
    } 
    else {
        return false
    }
}

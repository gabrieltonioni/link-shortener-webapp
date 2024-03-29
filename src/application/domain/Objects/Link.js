export default function buildMakeLink ({Id, validateUrl, urlShortener, makeLinkStats, makeLinkConfig}) {

    return function makeLink ({
        id = Id.makeId(),
        originalUrl,
        author,
        createdOn = Date.now(),
        modifiedOn = Date.now(),
    } = {}) {
        
        if (!Id.isValid(id)) {
            throw new Error('Link must have a valid id.')
        }
        if (!originalUrl) {
            throw new Error('Link must be provided with a url')
        }
        if (!validateUrl(originalUrl)) {
            throw new Error('Url to be shortened must be a valid url.')
        }
        if (!author) {
            throw new Error('Link must have an author.')
        }
        if (author.length < 3) {
            throw new Error('Link author\'s name must be longer than 3 characters.')
        }

        const shortenedUrl = urlShortener(originalUrl)
        const stats = makeLinkStats()
        const config = makeLinkConfig()

        return Object.freeze({
            getId: () => id,
            getOriginalUrl: () => originalUrl,
            getShortenedUrl: () => shortenedUrl,
            getAuthor: () => author,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn,
            getActivated: () => activated,
            deactivate: () => {
                activated = false
            },
            getStats: () => stats,
            getConfig: () => config,
            updateStats: (stats) => {
                stats = makeLinkStats(stats)
            },
            updateConfig: (config) => {
                config = makeLinkConfig(config)
            }
        })

    }

}

export default function buildMakeLinkStats () {

    return function makeLinkStats ({
        numberOfClicks = 0,
        profit = 0
    } = {}) {

        return Object.freeze({
            getNumberOfClicks: () => numberOfClicks,
            getProfit: () => profit
        })

    }

}

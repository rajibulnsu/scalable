function mapDate({ t, mu, sigma, fee, initialSum, monthlySum }) {
    let yearlyReturn = mu - fee;
    let monthlyReturn = yearlyReturn / 12;
    let month = t * 12;

    let median = initialSum * Math.exp(yearlyReturn * t) + monthlySum * Math.exp(monthlyReturn * (month - Math.floor(month))) * (Math.exp(monthlyReturn * Math.floor(month)) - 1.0) / (Math.exp(monthlyReturn) - 1.0);

    return {
        median: median,
        upper95: Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645),
        lower05: Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645)
    };
};

export default mapDate;

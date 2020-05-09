import mapDate from './mapDate';

const calculateTimeSeries = ({ years, mu, sigma, fee, initialSum, monthlySum }) => {

  var series = [];
  for (var k = 0; k <= 12 * years; ++k) {
    series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
  }

  let allSeries = {
    median: [],
    upper95: [],
    lower05: []
  };

  for (var k = 0; k < series.length; k++) {
    allSeries.median.push({ y: series[k].median, x: series[k].x });
    allSeries.upper95.push({ y: series[k].upper95, x: series[k].x });
    allSeries.lower05.push({ y: series[k].lower05, x: series[k].x });
  }

  return allSeries;
};

export default calculateTimeSeries;
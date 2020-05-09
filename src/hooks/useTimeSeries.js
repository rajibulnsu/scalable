import calculateTimeSeries from '../utils/calculateTimeSeries';

const useTimeSeries = (riskLevel, initialSum, cones) => {
  const { mu, sigma } = cones.length > 0 && cones.filter(cone => cone.riskLevel === riskLevel)[0];
  const fee = 0.01;

  const timeSeries = calculateTimeSeries({
    mu,
    sigma,
    years: 10,
    initialSum,
    monthlySum: 200,
    fee
  });

  const months = timeSeries.median.map((v, idx) => idx);
  const labels = timeSeries.median.map((v, idx) => idx % 12 === 0 ? idx / 12 : '');
  let dataGood = timeSeries.upper95.map(v => v.y);
  let dataMedian = timeSeries.median.map(v => v.y);
  const dataBad = timeSeries.lower05.map(v => v.y);

  return {
    months,
    labels,
    dataGood,
    dataMedian,
    dataBad
  }
}

export default useTimeSeries;

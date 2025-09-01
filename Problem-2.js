function generateSeries(n) {
    const series = [];
    for (let i = 1; i <= n * 2 - 1; i += 2) {
      series.push(i);
    }
    return series;
  }
  
  console.log(generateSeries(4)); 
  
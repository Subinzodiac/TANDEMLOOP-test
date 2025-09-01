function conditionalSeries(n) {
    const series = [];
    let limit = n % 2 === 0 ? n - 1 : n;
    for (let i = 1; i <= limit * 2 - 1; i += 2) {
      series.push(i);
    }
    return series;
  }
  
  
  console.log(conditionalSeries(2)); 
  console.log(conditionalSeries(3)); 
  console.log(conditionalSeries(6)); 
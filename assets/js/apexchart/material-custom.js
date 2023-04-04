/*=====================
    Material Dashboard Chart 
  ==========================*/

/*=======/Revenue Spark line/=======*/
const revenueChart1 = {
  series: [
    {
      data: [45, 25, 55, 47, 89, 47, 70, 38, 92, 44, 38, 70],
    },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 67,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 5,
    },
  },

  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--secondary))'],
  fill: {
    colors: 'rgba(var(--secondary), 0.4)',
    type: 'solid',
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 87,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 75,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 70,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 80,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 876,
      options: {
        chart: {
          height: 78,
          sparkline: {
            enabled: true,
          },

        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 70,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
  ],
};
const revenueChart1El = new ApexCharts(document.querySelector('#revenueChart1'), revenueChart1);
revenueChart1El.render();

/*=======/Market Overview chart/=======*/
const marketOverViewChart = {
  series: [
    {
      name: 'Desktops',
      data: [18, 30, 25, 51, 34, 40, 34],
    },
  ],
  chart: {
    height: 205,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 12,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  colors: ['rgba(var(--primary),1)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },

  tooltip: {
    enabled: false,
  },

  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 203,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 195,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 172,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 326,
      options: {
        chart: {
          height: 145,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
  ],
};
const marketOverViewChartEl = new ApexCharts(document.querySelector('#market-overview-chart'), marketOverViewChart);
marketOverViewChartEl.render();

/*=======/Market Overview small/=======*/
new Chartist.Bar(
  '.sales-small-1',
  {
    series: [
      [4, 9, 8, 10, 7, 12],
      [10, 5, 6, 4, 7, 2],
    ],
  },
  {
    stackBars: true,
    chartPadding: {
      top: -15,
      right: 0,
      bottom: -15,
      left: -35,
    },
    axisX: {
      showGrid: false,
    },
    axisY: {
      low: 0,
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value / 1;
      },
    },
  },
).on('draw', function (data) {
  if (data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 3px; stroke-linecap: round',
    });
  }
});

//Market Overview small  chart-2
new Chartist.Bar(
  '.sales-small-2',
  {
    series: [
      [4, 9, 8, 10, 7, 12],
      [10, 5, 6, 4, 7, 2],
    ],
  },
  {
    stackBars: true,
    chartPadding: {
      top: -15,
      right: 0,
      bottom: -15,
      left: -35,
    },
    axisX: {
      showGrid: false,
    },
    axisY: {
      low: 0,
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value / 1;
      },
    },
  },
).on('draw', function (data) {
  if (data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 3px; stroke-linecap: round',
    });
  }
});

//Market Overview small  chart-3
new Chartist.Bar(
  '.sales-small-3',
  {
    series: [
      [4, 9, 8, 10, 7, 12],
      [10, 5, 6, 4, 7, 2],
    ],
  },
  {
    stackBars: true,
    chartPadding: {
      top: -15,
      right: 0,
      bottom: -15,
      left: -35,
    },
    axisX: {
      showGrid: false,
    },
    axisY: {
      low: 0,
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value / 1;
      },
    },
  },
).on('draw', function (data) {
  if (data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 3px ; stroke-linecap: round',
    });
  }
});

/*=======/ Sell Overview Chart /=======*/
const SalesReportsOption = {
  series: [
    {
      name: 'series1',
      data: [42.5, 40, 36, 32, 28, 25, 22, 20, 18, 16.5, 15.5, 15, 15, 16, 18, 20, 23, 26, 30, 34, 38, 41.5, 45, 48, 51, 54, 56, 58, 59, 59, 58, 56.5, 54.5, 51.5, 48, 44],
    },
    {
      name: 'series2',
      data: [57, 58, 58, 57.5, 56.5, 55, 52.5, 50, 47, 43.5, 40, 36, 32, 28, 24, 20, 17, 15, 14.0, 14, 15, 17, 20, 24, 28, 32, 36, 40, 44, 48, 51.5, 54.5, 56.6, 58, 58.5, 58],
    },
  ],
  chart: {
    height: 288,
    width: '100%',
    type: 'line',
    offsetY: 12,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['rgba(var(--secondary),1', 'rgba(var(--primary),1'],
  markers: {
    size: 5,
    strokeColors: '#fff',
    strokeWidth: 2,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: 10,
      strokeWidth: 20,
    },
  },
  stroke: {
    curve: 'straight',
    lineCap: 'butt',
    width: 3,
  },
  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    strokeDashArray: 0,
    position: 'back',
    padding: {
      top: -20,
      right: 10,
      bottom: 0,
      left: 12,
    },
  },
  yaxis: {
    logBase: 100,
    tickAmount: 6,
    min: 0,
    max: 60,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 25,
      style: {
        ...fontCommon,
      },

      formatter: (value) => {
        return `${value}k`;
      },
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    tickAmount: 12,
    labels: {
      minHeight: undefined,
      maxHeight: 28,
      offsetX: 10,
      offsetY: 0,
      style: {
        ...fontCommon,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="apex-tooltip"> 
                <span>
                     <span class="bg-secondary"> </span>
                      Selling : ${series[0][dataPointIndex]} K
                </span> 
                <span class="mt-2">
                     <span class="bg-primary"> </span>
                      Selling : ${series[1][dataPointIndex]} K
                </span> 
              </div>`;
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 279,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 265,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 240,
        },
        markers: {
          size: 4,
          strokeWidth: 1,
          radius: 1,
          hover: {
            size: 5,
            strokeWidth: 1,
          },
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 225,
        },
        markers: {
          size: 3,
          strokeWidth: 1,
          radius: 1,
          hover: {
            size: 4,
            strokeWidth: 1,
          },
        },
      },
    },
  ],
};

const salesReportsLineChartEl = new ApexCharts(document.querySelector('#salesReportsLineChart'), SalesReportsOption);
salesReportsLineChartEl.render();

/*=======/Seller Report Bar Chart/=======*/
const sellerReportBarOption = {
  series: [
    {
      data: [45, 25, 55, 47, 89, 47, 70, 38, 92, 44, 38, 70, 45, 25, 55, 47, 89, 47, 70, 38, 92, 44, 38, 70, 45, 25, 55, 47, 89, 47, 70, 38, 92, 44, 38, 70],
    },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 324,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 0,
    },
  },

  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--primary))'],
  fill: {
    colors: 'rgba(var(--primary), 0.4)',
    type: 'solid',
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 302,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 288,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 262,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 245,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 220,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 170,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
  ],
};
const sellerReportBarEl = new ApexCharts(document.querySelector('#sellerReportBar'), sellerReportBarOption);
sellerReportBarEl.render();

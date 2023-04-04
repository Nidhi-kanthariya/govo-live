/*=====================
    Unique Dashboard Chart 
  ==========================*/

/*=======/Revenue Spark line/=======*/
const revenueChart = {
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
      breakpoint: 675,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '55%',
            borderRadius: 5,
          },
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 55,
        },
        plotOptions: {
          bar: {
            columnWidth: '70%',
            borderRadius: 5,
          },
        },
      },
    },
  ],
};

const revenueChartEl = new ApexCharts(document.querySelector('#revenueChart'), revenueChart);
revenueChartEl.render();

/*=======/ Earnings Radial Chart /=======*/
const earningChart = {
  series: [46],
  chart: {
    type: 'radialBar',

    offsetY: 0,
    height: 280,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -100,
      endAngle: 100,
      hollow: {
        size: '40%',
      },
      track: {
        background: 'var(--chart-dark)',
        strokeWidth: '90%',
        startAngle: -100,
        endAngle: 100,
        opacity: 0.1,
      },

      dataLabels: {
        name: {
          show: true,
          ...fontCommon,
          color: 'var(--content)',
          offsetY: -1,
        },
        value: {
          offsetY: -40,
          ...fontCommon,
          fontSize: '24px',
          fontWeight: 700,
        },
      },
    },
  },
  grid: {
    padding: {
      top: -40,
      bottom: 0,
    },
  },
  stroke: {
    lineCap: 'round',
  },
  colors: ['var(--chart-dark)'],
  labels: ['Profile'],
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 250,

          offsetY: 20,
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
          height: 280,

          offsetY: 10,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,

          offsetY: 10,
          sparkline: {
            enabled: true,
          },
        },
      },
    },
    {
      breakpoint: 675,
      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 245,
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                ...fontCommon,
                show: true,
                color: 'var(--content)',
                offsetY: 5,
              },
              value: {
                offsetY: -30,
                fontSize: '20px',
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        chart: {
          height: 230,
        },

        plotOptions: {
          radialBar: {
            startAngle: -100,
            endAngle: 100,
            hollow: {
              size: '35%',
            },
          },
        },
      },
    },
  ],
};

const earningChartEl = new ApexCharts(document.querySelector('#earningChart'), earningChart);
earningChartEl.render();

/*=======/ Sell Overview Chart /=======*/
const SellOverview = {
  series: [
    {
      name: 'series1',
      data: [310, 280, 350, 310, 570, 590, 650, 550],
    },
  ],
  chart: {
    height: 320,
    width: '100%',
    type: 'area',
    offsetY: 0,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['rgba(var(--primary),1'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 0.4,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--primary),0.5)',
          opacity: 1,
        },
        {
          offset: 20,
          color: 'rgba(var(--primary),0.3)',
          opacity: 1,
        },
        {
          offset: 60,
          color: 'rgba(var(--primary),0.1)',
          opacity: 1,
        },
        {
          offset: 100,
          color: 'rgba(var(--primary), 0)',
          opacity: 1,
        },
      ],
    },
  },
  markers: {
    size: 0,
    strokeColors: 'rgba(var(--primary), 0.2)',
    strokeWidth: 30,
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
    curve: 'smooth',
  },
  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    strokeDashArray: 0,
    position: 'back',

    padding: {
      top: -20,
      right: -13,
      bottom: 0,
      left: 12,
    },
  },
  yaxis: {
    logBase: 100,
    tickAmount: 6,
    min: 100,
    max: 700,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 34,
      style: {
        ...fontCommon,
      },

      formatter: (value) => {
        return `${value}k`;
      },
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: -5,
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
      return '<div class="apex-tooltip">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Selling' + ': ' + series[seriesIndex][dataPointIndex] + 'K' + '</span>' + '</div>';
    },
  },

  responsive: [
    {
      breakpoint: 675,
      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};

const SellOverviewEl = new ApexCharts(document.querySelector('#SellOverview'), SellOverview);
SellOverviewEl.render();

/*=======/ Users Position /=======*/
const userPosition = {
  series: [
    {
      data: [70, 30, 40, 90, 60, 50],
    },
  ],
  chart: {
    type: 'bar',
    height: 323,
    width: '100%',
    toolbar: {
      show: false,
    },
  },
  colors: ['rgba(var(--primary),0.4)', 'rgba(var(--secondary),0.4)', '#072448', '#feb858'],
  fill: {
    opacity: 0.4,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '30%',
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    background: {
      enabled: true,
      foreColor: '#fff',
      borderRadius: 5,
      padding: 4,
      opacity: 0.9,
      borderWidth: 1,
      borderColor: '#fff',
    },
    offsetX: 21,
    offsetY: -6,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  },
  legend: {
    show: false,
  },

  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    strokeDashArray: 0,
    position: 'back',
    padding: {
      left: 50,
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France'],
    logBase: 100,
    tickAmount: 10,
    min: 0,
    max: 100,
    labels: {
      minHeight: undefined,
      maxHeight: 18,
      offsetX: -5,
      offsetY: 0,
      style: {
        ...fontCommon,
        fontWeight: 400,
      },
      tooltip: {
        enabled: false,
      },
    },
    title: {
      offsetX: 0,
      offsetY: -28,
      style: {
        ...fontCommon,
        color: 'var(--content)',
      },
    },
  },
  responsive: [
    {
      breakpoint: 675,
      options: {
        chart: {
          height: 300,
          offsetY: 15,
        },
        xaxis: {
          title: {
            offsetY: 0,
          },
        },

        grid: {
          padding: {
            left: -13,
            bottom: 25,
          },
        },
      },
    },
  ],
};

var userPositionEl = new ApexCharts(document.querySelector('#userPosition'), userPosition);
userPositionEl.render();
window.onload = function () {
  if (screen.width <= 675) {
    userPositionEl.updateOptions({
      grid: {
        padding: {
          left: -13,
          bottom: 25,
        },
      },
    });
  }
};

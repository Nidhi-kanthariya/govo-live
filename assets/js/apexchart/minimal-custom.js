/*=====================
    Minimal Dashboard Chart 
  ==========================*/

/*=======/Sales Stats Radial Chart/=======*/
const salesStatsOption = {
  series: [70],
  chart: {
    height: 340,
    type: 'radialBar',
    offsetY: 0,
  },

  stroke: {
    dashArray: 25,
    curve: 'smooth',
    lineCap: 'round',
  },
  grid: {
    padding: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      hollow: {
        size: '75%',
        image: '../../assets/images/apexchart/radial-image.png',
        imageWidth: 140,
        imageHeight: 140,
        imageClipped: false,
      },
      track: {
        show: true,
        background: 'rgba(var(--secondary),1)',
        strokeWidth: '97%',
        opacity: 0.4,
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: '16px',
          fontFamily: undefined,
          fontWeight: 600,
          color: undefined,
          offsetY: -10,
        },
        value: {
          show: true,
          ...fontCommon,
          fontSize: '20px',
          color: 'var(--title)',
          offsetY: 6,
          formatter: function (val) {
            return val + '%';
          },
        },
      },
    },
  },
  labels: ['Leads'],
  colors: ['rgba(var(--primary),1)'],
  legend: {
    show: true,
    position: 'bottom',
    ...fontCommon,
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 2,
      colors: '#fff',
      strokeColors: 'rgba(var(--primary), 1)',
      radius: 12,
    },
    onItemClick: {
      toggleDataSeries: false,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 320,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              imageWidth: 130,
              imageHeight: 130,
            },

            dataLabels: {
              name: {
                fontSize: '14px',
                offsetY: -8,
              },
              value: {
                fontSize: '18px',
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 676,
      options: {
        chart: {
          height: 350,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '68%',
            },
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 320,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
              imageWidth: 120,
              imageHeight: 120,
            },
          },
        },
      },
    },
    {
      breakpoint: 531,
      options: {
        chart: {
          height: 300,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
              imageWidth: 100,
              imageHeight: 100,
            },
          },
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 280,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
              imageWidth: 100,
              imageHeight: 100,
            },
          },
        },
      },
    },
  ],
};

const salesStatsChartEl = new ApexCharts(document.querySelector('#salesStatsRadialChart'), salesStatsOption);
salesStatsChartEl.render();

/*=======/ Social Media Statics Chart /=======*/

const recentStatistics1 = {
  series: [
    {
      name: 'series1',
      data: [0, 20, 70, 25, 100, 45, 25],
    },
  ],
  colors: ['rgba(var(--secondary),1'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 0.4,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--secondary),0.5)',
          opacity: 1,
        },
        {
          offset: 20,
          color: 'rgba(var(--secondary),0.3)',
          opacity: 1,
        },
        {
          offset: 60,
          color: 'rgba(var(--secondary),0.1)',
          opacity: 1,
        },
        {
          offset: 100,
          color: 'rgba(var(--secondary), 0)',
          opacity: 1,
        },
      ],
    },
  },
  markers: {
    size: 5,
    colors: '#fff',
    strokeColors: 'rgba(var(--secondary), 1)',
    strokeWidth: 2,
  },
};
const recentStatistics2 = {
  series: [
    {
      name: 'series1',
      data: [0, 50, 40, 90, 60, 120, 150],
    },
  ],
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
    size: 5,
    colors: '#fff',
    strokeColors: 'rgba(var(--primary), 1)',
    strokeWidth: 2,
  },
};

const recentStatisticsOption = (data) => {
  return {
    series: data.series,
    chart: {
      height: 278,
      width: '100%',
      type: 'area',
      stacked: true,
      offsetY: 18,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: data.colors,
    fill: data.fill,
    markers: data.markers,
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: {
      show: true,
      borderColor: 'var(--border-light)',
      strokeDashArray: 0,
      position: 'back',
      padding: {
        top: 0,
        right: -2,
        left: 15,
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
      show: false,
      logBase: 100,
      tickAmount: 6,
      min: 0,
      max: 150,
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        minHeight: undefined,
        maxHeight: 24,
        offsetX: 0,
        offsetY: 0,
        style: {
          ...fontCommon,
          fontWeight: 400,
        },
        tooltip: {
          enabled: false,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      style: {
        ...fontCommon,
        fontSize: '12px',
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: false,
      },
    },

    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 260,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 240,
          },
        },
      },
      {
        breakpoint: 376,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };
};

const recentStatisticsChartEl = new ApexCharts(document.querySelector('#recentStatisticsChart1'), recentStatisticsOption(recentStatistics1));
const recentStatisticsChartE2 = new ApexCharts(document.querySelector('#recentStatisticsChart2'), recentStatisticsOption(recentStatistics2));
recentStatisticsChartEl.render();
recentStatisticsChartE2.render();

/*=======/ Project Summary /=======*/

const groupChartOption = {
  series: [
    {
      name: 'Good',
      data: [170, 250, 350, 150, 230, 120, 330, 350, 280, 300, 250, 110],
    },
    {
      name: 'Very Good',
      data: [290, 180, 120, 290, 370, 250, 230, 200, 140, 220, 220, 330],
    },
  ],
  colors: ['rgba(var(--primary),1)', 'rgba(var(--secondary),1)'],
  chart: {
    type: 'bar',
    height: 250,
    width: '100%',
    offsetY: 10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top',
      },
    },
  },

  grid: {
    show: false,
    padding: {
      left: -8,
      right: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 8,
      columnWidth: '45%',
      barHeight: '100%',
      s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
      e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
    },
  },

  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    shared: true,
    intersect: false,
    x: {
      show: true,
      format: 'dd MMM',
      formatter: undefined,
    },
    y: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    max: 400,
    logBase: 100,
    tickAmount: 4,
  },
  xaxis: {
    show: false,
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
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 225,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 193,
        },
      },
    },
    {
      breakpoint: 676,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: '55%',
          },
        },
      },
    },
    {
      breakpoint: 531,
      options: {
        chart: {
          height: 170,
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: '65%',
          },
        },
      },
    },
  ],
};

const groupBarChartEl = new ApexCharts(document.querySelector('#groupBarChart'), groupChartOption);
groupBarChartEl.render();

/*=======/ Last Orders /=======*/
const lastOrdersOption = {
  series: [
    {
      data: [
        {
          x: 'Jan',
          y: [210, 400],
        },
        {
          x: 'Feb',
          y: [300, 490],
        },
        {
          x: 'Mar',
          y: [350, 500],
        },
        {
          x: 'Apr',
          y: [210, 390],
        },
        {
          x: 'May',
          y: [280, 400],
        },
        {
          x: 'Jun',
          y: [110, 250],
        },
        {
          x: 'Jul',
          y: [210, 400],
        },
        {
          x: 'Aug',
          y: [290, 390],
        },
        {
          x: 'Sep',
          y: [250, 490],
        },
        {
          x: 'Oct',
          y: [210, 390],
        },
        {
          x: 'Nov',
          y: [190, 310],
        },
        {
          x: 'Dec',
          y: [250, 450],
        },
      ],
    },
  ],
  chart: {
    type: 'rangeBar',
    height: 310,
    offsetY: 13,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    position: 'back',

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
  tooltip: {
    enabled: false,
  },
  colors: ['rgba(var(--primary),1)'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: false,
  },

  yaxis: {
    logBase: 100,
    tickAmount: 4,
    min: 100,
    max: 500,
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
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: 0,
      offsetY: 0,
      style: {
        ...fontCommon,
        fontWeight: 400,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 295,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 270,
        },
      },
    },
    {
      breakpoint: 676,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
        xaxis: {
          labels: {
            maxHeight: 30,
            offsetX: 0,
            offsetY: 0,
            rotate: -45,
            rotateAlways: true,
            style: {
              fontSize: '14px',
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 34,
            style: {
              ...fontCommon,
              fontSize: '14px',
            },

            formatter: (value) => {
              return `${value}k`;
            },
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 200,
        },
        xaxis: {
          labels: {
            maxHeight: 34,
            rotate: -70,
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 31,
            style: {
              ...fontCommon,
              fontSize: '13px',
            },

            formatter: (value) => {
              return `${value}k`;
            },
          },
        },
      },
    },
  ],
};

const lastOrdersChartEl = new ApexCharts(document.querySelector('#lastOrdersChart'), lastOrdersOption);
lastOrdersChartEl.render();

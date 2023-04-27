/*=====================
    Friendly Dashboard Chart 
  ==========================*/

/*=======/Total Follower Bar Spark line/=======*/
const totalFollowersBarChartOption = {
  series: [
    {
      data: [10, 55, 45, 89, 63, 52, 70],
    },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 110,
    sparkline: {
      enabled: true,
    },
  },

  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: -14,
    },
  },

  plotOptions: {
    bar: {
      columnWidth: '70%',
    },
  },

  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--primary),1)'],
  fill: {
    colors: 'rgba(var(--primary), 0.2)',
    type: 'solid',
  },
  tooltip: toolTipMini,
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 86,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        grid: {
          padding: {
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 50,
        },
      },
    },
  ],
};

const totalFollowersBarChartEl = new ApexCharts(document.querySelector('#totalFollowersBarChart'), totalFollowersBarChartOption);
totalFollowersBarChartEl.render();

/*=======/Total Likes area Spark line/=======*/

const totalLikesOption = {
  series: [
    {
      name: 'series2',
      data: [5, 30, 20, 80, 27, 29, 24, 34, 18, 70, 60, 110, 0],
    },
  ],
  chart: {
    height: 110,
    type: 'area',
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },

  colors: ['#072448'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.4,
    },
  },
  stroke: {
    curve: 'smooth',
  },

  tooltip: toolTipMini,
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 86,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 5,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 50,
        },
      },
    },
  ],
};

const totalLikesEl = new ApexCharts(document.querySelector('#totalLikesAreaChart'), totalLikesOption);
totalLikesEl.render();

/*=======/Radial Chart/=======*/
const totalCommentOption = {
  series: [60],
  chart: {
    type: 'radialBar',
    height: 120,
    offsetY: 0,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      offsetY: 0,
      hollow: {
        size: '50%',
      },
      track: {
        background: 'rgba(var(--secondary),0.1)',
        strokeWidth: '90%',
        startAngle: 0,
        endAngle: 360,
      },

      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        name: {
          show: false,
        },
        value: {
          fontSize: '16px',
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 600,
          offsetY: 5,
        },
      },
    },
  },
  colors: ['rgba(var(--secondary),1)'],
  grid: {
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  stroke: {
    lineCap: 'round',
  },
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 115,
        },

        plotOptions: {
          radialBar: {
            hollow: {
              size: '48%',
            },

            dataLabels: {
              value: {
                fontSize: '14px',
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          height: 100,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '42%',
            },
            dataLabels: {
              value: {
                fontSize: '13px',
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 120,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%',
            },
            dataLabels: {
              value: {
                fontSize: '18px',
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 876,
      options: {
        chart: {
          height: 110,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '45%',
            },
            dataLabels: {
              value: {
                fontSize: '18px',
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 90,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '40%',
            },

            dataLabels: {
              value: {
                fontSize: '14px',
              },
            },
          },
        },
      },
    },
  ],
};

const totalCommentEl = new ApexCharts(document.querySelector('#totalCommentRadialChart'), totalCommentOption);
totalCommentEl.render();

/*=======/Total Follower Bar Spark line/=======*/
const totalSaveBarChartOption = {
  series: [
    {
      data: [30, 66, 45, 89, 63, 52, 70],
    },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 110,
    sparkline: {
      enabled: true,
    },
  },

  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: -5,
    },
  },

  plotOptions: {
    bar: {
      columnWidth: '40%',
      borderRadius: 5,
    },
  },

  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['#feb858'],
  fill: {
    type: 'solid',
    opacity: 0.3,
  },
  tooltip: toolTipMini,
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 86,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 5,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 50,
        },
        plotOptions: {
          bar: {
            columnWidth: '60%',
            borderRadius: 5,
          },
        },
      },
    },
  ],
};

const totalSaveBarChartEl = new ApexCharts(document.querySelector('#totalSaveBarChart'), totalSaveBarChartOption);
totalSaveBarChartEl.render();

/*=======/ Social Media Statics Chart /=======*/
const socialMediaStatisticsOption = {
  series: [
    {
      name: 'series1',
      data: [200, 570, 200, 300, 280, 530, 440, 440, 630, 400, 450, 560, 350, 200],
    },
  ],
  chart: {
    height: 280, 
    width: '100%',
    type: 'area',
    offsetY: 14,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
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
    size: 7,
    colors: '#fff',
    strokeColors: 'rgba(var(--secondary), 1)',
    strokeWidth: 3,

    hover: {
      size: 9,
      strokeWidth: 20,
    },
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    strokeDashArray: 4,
    position: 'back',
    padding: {
      top: -22,
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
    min: 100,
    max: 700,
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: [' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec', ' '],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: 0,
      offsetY: 0,
      style: {
        ...fontCommon,
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
      breakpoint: 1700,
      options: {
        chart: {
          height: 243,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 215,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 180,
        },
        markers: {
          size: 5,
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
        xaxis: {
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: true,
            hideOverlappingLabels: true,
            showDuplicates: false,
            maxHeight: 30,
            offsetX: 3,
          },
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 160,
        },
      },
    },
  ],
};

const socialMediaStatisticsEl = new ApexCharts(document.querySelector('#socialAreaChart'), socialMediaStatisticsOption);
socialMediaStatisticsEl.render();

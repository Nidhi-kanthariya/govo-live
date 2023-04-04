document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2020-09-12',
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    height: 'auto',
    navLinks: false, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    events: [
      {
        id: 1,
        title: 'Carla Packard ',
        subTitle: 'Ux Designer',
        image: '../../assets/images/avatar/2.jpg',
        hours: 06,
        task: 02,
        classNames: ['common-style', 'bg-primary-light'],
        start: '2020-09-05T24:00:00',
      },
      {
        id: 2,
        title: 'Wade Warren',
        subTitle: 'Ux Designer',
        image: '../../assets/images/avatar/11.jpg',
        hours: 06,
        task: 02,
        classNames: ['common-style', 'bg-secondary-light'],
        start: '2020-09-07T01:00:00',
      },
      {
        id: 3,
        title: 'Andrew Black',
        subTitle: 'Web designer',
        image: '../../assets/images/avatar/17.jpg',
        hours: 06,
        task: 02,
        classNames: ['common-style', 'success-light'],
        start: '2020-09-08T02:00:00',
      },
    ],
  });

  calendar.render();
});

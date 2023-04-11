import '@fullcalendar/core/preact';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import SwipeCalendar from 'swipecalendar/dist/swipeCalendar';

// document.addEventListener('DOMContentLoaded', function(){
//   let calendarEl = document.getElementById('calendar');
//   let calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
//     initialView: 'dayGridMonth',
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,listWeek'
//     }
//   });
//   calendar.render();
// })

document.addEventListener('DOMContentLoaded', function () {
  let calendarEl = document.getElementById('calendar');
  let calendar = new SwipeCalendar(calendarEl, {
    swipeEffect: 'slide',
    swipeSpeed: 250,
    swipeTitlePosition: 'center',

    // FullCalendar options and callbacks
    plugins: [dayGridPlugin],
    height: '100%',
  })
});
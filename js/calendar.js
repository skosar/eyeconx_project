/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){ 
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: false,
    events: [
      {
        title: '72 SMS',
        start: new Date(y, m, 16),
        allDay: true,
        url:"/"
      },
      {
        title: '$42',
        start: new Date(y, m, 16),
        allDay: true
      },
       {
        title: '3 Emails',
        start: new Date(y, m, 16),
        allDay: true,
        url:"/"
      },
      {
        title: '92 Calls',
        start: new Date(y, m, 16),
        allDay: true
      },
      {
        id:1,
        title: '810 SMS',
        start: new Date(y, m, 4),
        allDay: true,
        url:"/"
      },
      {
        title: '$560',
        start: new Date(y, m, 4),
        allDay: true
      },
      {
        title: '7 Emails',
        start: new Date(y, m, 4),
        allDay: true,
        url:"/"
      },
      {
        title: '73 Calls',
        start: new Date(y, m, 4),
        allDay: true,
        url:"/"
      },
       {
        title: '109 SMS',
        start: new Date(y, m, 20),
        allDay: true
      },
      {
        title: '$90',
        start: new Date(y, m, 20),
        allDay: true
      },
       {
        title: '8 Emails',
        start: new Date(y, m, 20),
        allDay: true
      },
      {
        title: '17 Calls',
        start: new Date(y, m, 20),
        allDay: true
      }
    ]
  });
  
  $('.fc-event.fc-event-hori.fc-event-start.fc-event-end').webuiPopover({
                constrains: 'horizontal', 
                trigger:'click',
                multi: true,
                closeable:true,
                placement:'bottom-right',
                width:315,
                height:'auto',
                animation:'fade',
                content: '<div class="table-popover">\n\
        <div class="str"><div class="left">Adam Baker</div><div class="right">Read</div>\n\
<div class="str"><div class="left">Mila Davis</div><div class="right">Read</div>\n\
<div class="str"><div class="left">Mike Wasovsky</div><div class="right">Answered</div>\n\
<div class="str"><div class="left">Adam Baker</div><div class="right">Read</div>\n\
<div class="str"><div class="left">Adam Baker</div><div class="right">Read</div>\n\</div>\n\
<div class="line"></div>\n\
<div class="str"><div class="left" style="width:75%">Future Appointments</div><div class="right" style="width:25%">33</div>\n\</div>\n\
<div class="str"><div class="left" style="width:75%">Revenue</div><div class="right" style="width:25%">$4,950</div>\n\</div></div>'
    });
    

/*Calendar New Page*/ 
    
$('.stat-day a').webuiPopover({
                constrains: 'horizontal', 
                trigger:'click',
                multi: true,
                closeable:true,
                width:315,
                placement:'right',
                height:'auto',
                animation:'fade',
                content: '<div class="table-popover">\n\
        <div class="str"><div class="left">Adam Baker</div><div class="right">Read</div>\n\
<div class="str"><div class="left">Mila Davis</div><div class="right">Read</div>\n\
<div class="str"><div class="left">Mike Wasovsky</div><div class="right">Answered</div>\n\
<div class="str"><div class="left">Adam Baker</div><div class="right">Read</div>\n\
<div class="str"><div class="left">Adam Baker</div><div class="right">Read</div>\n\</div>\n\
<div class="line"></div>\n\
<div class="str"><div class="left" style="width:75%">Future Appointments</div><div class="right" style="width:25%">33</div>\n\</div>\n\
<div class="str"><div class="left" style="width:75%">Revenue</div><div class="right" style="width:25%">$4,950</div>\n\</div></div>'
    });
  
  
});



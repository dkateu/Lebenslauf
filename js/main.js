jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Java Chart
  var doughnutData = [{
      value: 60,
      color: "#1abc9c"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // html/css Chart
  var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // javascript Chart
  var doughnutData = [{
    value: 55,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Python Chart
  var doughnutData = [{
    value: 75,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // php Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);

  // SQL Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("sql").getContext("2d")).Doughnut(doughnutData);
});


// ms office Chart
var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("msoffice").getContext("2d")).Doughnut(doughnutData);

// bootstrap Chart
var doughnutData = [{
  value: 90,
  color: "#1abc9c"
},
{
  value: 10,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

// NetBeans Chart
var doughnutData = [{
  value: 90,
  color: "#1abc9c"
},
{
  value: 10,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("linux").getContext("2d")).Doughnut(doughnutData);


// Linux Chart

var doughnutData = [{
  value: 70,
  color: "#1abc9c"
},
{
  value: 30,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("netbeans").getContext("2d")).Doughnut(doughnutData);


// Wordpress Chart
var doughnutData = [{
  value: 80,
  color: "#1abc9c"
},
{
  value: 20,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

// Pencil Chart
var doughnutData = [{
  value: 90,
  color: "#1abc9c"
},
{
  value: 10,
  color: "#ecf0f1"
}
];

var myDoughnut = new Chart(document.getElementById("pencil").getContext("2d")).Doughnut(doughnutData);


// Sprachen
 // Deutsch Chart
var doughnutData = [{
  value: 95,
  color: "#1abc9c"
},
{
  value: 05,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("deutsch").getContext("2d")).Doughnut(doughnutData);
 
// ENglisch Chart
var doughnutData = [{
  value: 60,
  color: "#1abc9c"
},
{
  value: 40,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("Englisch").getContext("2d")).Doughnut(doughnutData);

// ENglisch Chart
var doughnutData = [{
  value: 100,
  color: "#1abc9c"
},
{
  value: 00,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("französich").getContext("2d")).Doughnut(doughnutData);




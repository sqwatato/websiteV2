Light = function(canvas, x, y, game) {
  var self = {};
  self.x = x;
  self.y = y;
  self.game = game;

  var radius = 15;
  var canvas = null;

  self.init = function() {
    Mouse.registerTouchable(self, { x: self.x, y: self.y });
    var canvasElement = document.getElementById('ball');
    canvas = $("#lights").getContext('2d');
    canvas.beginPath();
    canvas.setLineDash([0]);
    canvas.arc(x, y, radius, 0, 2 * Math.PI, false);
    canvas.fillStyle = '#935f30';
    canvas.lineWidth = 6;
    canvas.strokeStyle = '#3a1f0a';
    canvas.fill();
    canvas.stroke();
    // Add the click event listener to the canvas
    canvasElement.addEventListener('click', self.click);
    return self;
  }

  self.mouseOver = function() {
    if (self.game.ready === 2) {
      canvas.beginPath();
      canvas.arc(x, y, radius, 0, 2 * Math.PI, false);
      canvas.fillStyle = 'rgba(252, 237, 188, 1)';
      canvas.fill();
      canvas.lineWidth = 6;
      canvas.strokeStyle = '#3a1f0a';
      canvas.stroke();
    }
  }

  self.mouseOut = function() {
    if (self.game.ready === 2) {
      canvas.beginPath();
      canvas.arc(x, y, radius, 0, 2 * Math.PI, false);
      canvas.fillStyle = 'rgba(147, 95, 48, 1)';
      canvas.fill();
      canvas.lineWidth = 6;
      canvas.strokeStyle = '#3a1f0a';
      canvas.stroke();
    }
  }

  self.glow = function(glow_speed) {
    if (self.game.ready === 2) {
      canvas.beginPath();
      canvas.arc(x, y, radius, 0, 2 * Math.PI, false);
      canvas.fillStyle = 'rgba(252, 237, 188, 1)';
      canvas.fill();
      canvas.lineWidth = 6;
      canvas.strokeStyle = '#3a1f0a';
      canvas.stroke();
      glow_interval = 40;
      glow_speed = glow_speed ? glow_speed : 1;
      self.alpha = 0;
      self.glow_int = setInterval(function() {
        canvas.beginPath();
        canvas.arc(x, y, radius, 0, 2 * Math.PI, false);
        canvas.fillStyle = 'rgba(147, 95, 48, '+self.alpha/10+')';
        canvas.fill();
        canvas.lineWidth = 6;
        canvas.strokeStyle = '#3a1f0a';
        canvas.stroke();
        self.alpha += glow_speed;
        if(Math.round(self.alpha) == 10) {
          clearInterval(self.glow_int);
        }
      }, glow_interval);
    }
  }

  self.start_marker = function() {
    m_width = 40;
    m_height = 20;
    m_angle = 30;
    m_start = {
      x: x-20,
      y: y-15,
    };

    canvas.clearRect(m_start.x-10, m_start.y-10, m_width+25, m_height+25);

    canvas.fillStyle="#2fbeea";
    canvas.strokeStyle="#FFFFFF";
    canvas.lineWidth = 6;
    canvas.beginPath();

    canvas.moveTo( m_start.x, m_start.y );
    canvas.lineTo( (m_start.x + m_width), m_start.y );
    canvas.lineTo( (m_start.x + m_height), (m_start.y + m_angle) );

    canvas.closePath();
    canvas.fill();
    canvas.stroke();
  }

  self.click = function(event) {
    if (self.game.ready === 2) {
      var canvasElement = document.getElementById('ball');
      var rect = canvasElement.getBoundingClientRect();
      var dx = event.clientX - rect.left - x;
      var dy = event.clientY - rect.top - y;
      var distance = Math.sqrt(dx * dx + dy * dy);
    
      if (distance < radius) {
        self.game.ready = 1;
      }
    }
  }
  

  return self.init();
}
function animate() {
  requestAnimFrame(animate);
  if(Game.ready === 1) {
    Game.ball.draw();
  }
}
document.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('.custom-cursor');
    const x = event.clientX - 20;
    const y = event.clientY - 20;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  });
  
const w1 = document.getElementById('sw');
const w2 = document.getElementById('sw2')
const targetDiv = document.getElementById('swe');


w1.addEventListener('mouseover', function() {
  targetDiv.innerText = '.........';
  targetDiv.style.display = 'block';
});

w2.addEventListener('mouseover', function() {
    targetDiv.innerText = 'only for recruiters';
    targetDiv.style.display = 'block';

}
);

w1.addEventListener('mouseout', function() {
  targetDiv.style.display = 'none';
}); 

w2.addEventListener('mouseout', function() {
    targetDiv.style.display = 'none';
  }); 

var introDiv = document.getElementById('intro');
var mainDiv = document.getElementById('ww');

window.addEventListener('load', function() {
  introDiv.style.transition = 'transform 5s';
  introDiv.style.transform = 'scale(5)';
  
  setTimeout(function() {
    introDiv.style.display = 'none';
    mainDiv.style.display = 'block';
  }, 3000);
});

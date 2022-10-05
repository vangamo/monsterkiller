const cajoncito = document.getElementById('monigota');
const zoombie1 = document.getElementById('zoombie1');
const zoombie2 = document.getElementById('zoombie2');

const VELOCIDAD_ZOOMBIE = 25;

const y = (mob) => {
  return parseInt(mob.style.top);
};

const x = (mob) => {
  return parseInt(mob.style.left);
};

const moverHaciaArriba = (mob, distancia) => {
  mob.style.top = parseInt(mob.style.top) - distancia;
};

const moverHaciaAbajo = (mob, distancia) => {
  mob.style.top = parseInt(mob.style.top) + distancia;
};

const moverHaciaIzquierda = (mob, distancia) => {
  mob.style.left = parseInt(mob.style.left) - distancia;
};

const moverHaciaDerecha = (mob, distancia) => {
  mob.style.left = parseInt(mob.style.left) + distancia;
};

// Código para mover el zoombie 1.

setInterval(() => {
  if (y(cajoncito) < y(zoombie1) && y(zoombie1) - VELOCIDAD_ZOOMBIE !== y(zoombie2)) {
    moverHaciaArriba(zoombie1, VELOCIDAD_ZOOMBIE);
  } else if (y(zoombie1) + VELOCIDAD_ZOOMBIE !== y(zoombie2)) {
    moverHaciaAbajo(zoombie1, VELOCIDAD_ZOOMBIE);
  }
  if (x(cajoncito) < x(zoombie1) && x(zoombie1) - VELOCIDAD_ZOOMBIE !== x(zoombie2)) {
    moverHaciaIzquierda(zoombie1, VELOCIDAD_ZOOMBIE);
  } else if (x(zoombie1) + VELOCIDAD_ZOOMBIE !== x(zoombie2)) {
    moverHaciaDerecha(zoombie1, VELOCIDAD_ZOOMBIE);
  }

  console.log('Monigota', x(cajoncito), y(cajoncito));
  console.log('Zoombie1', x(zoombie1), y(zoombie1));

  if (x(cajoncito) === x(zoombie1) && y(cajoncito) === y(zoombie1)) {
    console.log('ME COMEEEE ZOOOMBIE 1');
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      document.body.style.backgroundColor = 'white';
    }, 100);
  }
}, 500);

// Código para mover el zoombie 2.

setInterval(() => {
  if (y(cajoncito) < y(zoombie2) && y(zoombie2) - VELOCIDAD_ZOOMBIE !== y(zoombie1)) {
    moverHaciaArriba(zoombie2, VELOCIDAD_ZOOMBIE);
  } else if (y(zoombie2) + VELOCIDAD_ZOOMBIE !== y(zoombie1)) {
    moverHaciaAbajo(zoombie2, VELOCIDAD_ZOOMBIE);
  }
  if (x(cajoncito) < x(zoombie2) && x(zoombie2) - VELOCIDAD_ZOOMBIE !== x(zoombie1)) {
    moverHaciaIzquierda(zoombie2, VELOCIDAD_ZOOMBIE);
  } else if (x(zoombie2) + VELOCIDAD_ZOOMBIE !== x(zoombie1)) {
    moverHaciaDerecha(zoombie2, VELOCIDAD_ZOOMBIE);
  }

  console.log('Zoombie2', x(zoombie2), y(zoombie2));

  if (Math.abs(x(cajoncito) - x(zoombie2)) < 100 && Math.abs(y(cajoncito) - y(zoombie2)) < 100) {
    console.log('ME COMEEEE ZOOOMBIE 2');
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      document.body.style.backgroundColor = 'white';
    }, 100);
  }
}, 400);

window.addEventListener('keydown', (ev) => {
  console.log(ev);
  if (ev.key === 'w' || ev.key === 'W') {
    if (parseInt(cajoncito.style.top) > 0) {
      if (ev.shiftKey === true) {
        cajoncito.style.top = parseInt(cajoncito.style.top) - 20;
      } else {
        cajoncito.style.top = parseInt(cajoncito.style.top) - 10;
      }
    }
  }

  if (ev.key === 'a') {
    if (parseInt(cajoncito.style.left) > 0) {
      cajoncito.style.left = parseInt(cajoncito.style.left) - 10;
    }
  }
  if (ev.key === 's') {
    if (parseInt(cajoncito.style.top) + 100 < window.innerHeight) {
      cajoncito.style.top = parseInt(cajoncito.style.top) + 10;
    }
  }
  if (ev.key === 'd') {
    if (parseInt(cajoncito.style.left) + 100 < window.innerWidth) {
      cajoncito.style.left = parseInt(cajoncito.style.left) + 10;
    }
  }

  if (ev.key === ' ') {
    cajoncito.style.top = parseInt(cajoncito.style.top) - 10;
    setTimeout(() => {
      cajoncito.style.top = parseInt(cajoncito.style.top) - 10;
    }, 100);
    setTimeout(() => {
      cajoncito.style.top = parseInt(cajoncito.style.top) + 10;
    }, 200);
    setTimeout(() => {
      cajoncito.style.top = parseInt(cajoncito.style.top) + 10;
    }, 300);
  }
});

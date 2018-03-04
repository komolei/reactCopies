import Rx from 'rxjs/Rx';

require('./scss/index.scss');

// const tvBox = document.querySelector('.tvBox'),
//     mouseDown = Rx.Observable.fromEvent(tvBox, 'mousedown'),
//     mouseMove = Rx.Observable.fromEvent(document, 'mousemove'),
//     mouseUp = Rx.Observable.fromEvent(document, 'mouseup'),
//     validValue = (value, max, min) => Math.max(Math.min(value, max), min);

// Rx.Observable.fromEvent(document, 'scroll')
//     .map(e => tvBox.getBoundingClientRect().bottom < 0)
//     .subscribe(res => {
//         res ? tvBox.classList.add('changeTvBox') : tvBox.classList.remove('changeTvBox');
//     })

// mouseDown
//     .filter(e => tvBox.classList.contains('changeTvBox'))
//     .map(e => mouseMove.takeUntil(mouseUp))
//     .concatAll()
//     // .map(e => ({
//     //     x: validValue(e.clientX - tvBox.offsetX, window.innerWidth - tvBox.getBoundingClientRect().width, 0),
//     //     y: validValue(e.clientY - tvBox.offsetY, window.innerHeight - tvBox.getBoundingClientRect().height, 0)
//     // }))
//     .withLatestFrom(mouseDown, (down, move) => {
//         // console.log('down', down, 'move', move);
//         return {
//             x: validValue(down.clientX - move.offsetX, window.innerWidth - tvBox.getBoundingClientRect().width, 0),
//             y: validValue(down.clientY - move.offsetY, window.innerHeight - tvBox.getBoundingClientRect().height, 0)
//         }
//     })
//     .subscribe(res => {
//         tvBox.style.left = `${res.x}px`;
//         tvBox.style.top = `${res.y}px`;
//     })



const imgList = Array.from(document.querySelectorAll('img')),
    obs = Rx.Observable
        .fromEvent(document, 'mousemove')
        // .throttleTime(50)
        .map(e => ({ x: e.clientX, y: e.clientY }));
imgList.forEach((item, index) => {
    obs.delay(100 + index * 100).subscribe(res => {
        item.style.transform = `translate3d(${res.x}px,${res.y}px,0)`
    })
})
import Rx from 'rxjs/Rx';
require('./scss/index.scss');
const tvContainer = document.querySelector('.tvContainer'),
    tvBox = document.querySelector('.tvBox');

Rx.Observable
    .fromEvent(document, 'scroll')
    .map(e => tvContainer.getBoundingClientRect().bottom < 0)
    .subscribe(res => {
        console.log('res', res);
        res ? tvBox.classList.add('changeTvBox') : tvBox.classList.remove('changeTvBox');
    })


const documentMouseMove = Rx.Observable.fromEvent(document, 'mousemove'),
    documentMouseUp = Rx.Observable.fromEvent(document, 'mouseup'),
    tvBoxMouseDown = Rx.Observable.fromEvent(tvBox, 'mousedown'),
    // 限制可视范围
    validValue = (value, max, min) => Math.min(Math.max(value, min), max);

tvBoxMouseDown
    .filter(e => tvBox.classList.contains('changeTvBox')) // 限制拖拽行为
    .map(e => documentMouseMove.takeUntil(documentMouseUp))
    .concatAll()
    .withLatestFrom(tvBoxMouseDown, (mousemove, mousedown) => {
        console.log(tvBox.getBoundingClientRect());
        return {
            x: validValue(mousemove.clientX - mousedown.offsetX, window.innerWidth - tvBox.getBoundingClientRect().width, 0),
            y: validValue(mousemove.clientY - mousedown.offsetY, window.innerHeight - tvBox.getBoundingClientRect().height, 0)
        }
    })
    .subscribe(res => {
        tvBox.style.left = res.x + 'px';
        tvBox.style.top = res.y + 'px'
    })

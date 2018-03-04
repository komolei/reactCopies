import Rx from 'rxjs/Rx';
require('./scss/index.scss');
const s = document.querySelector('input[type=text]'),
    showText = document.querySelector('.autoComplete>p'),
    getData = (value) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
            .then(res => res.json());

Rx.Observable
    .fromEvent(s, 'input')
    .filter(e => e.target.value.length < 3)
    .debounceTime(400)
    .switchMap(e => Rx.Observable.from(getData(e.target.value)),
    (e, res, eIndex, resIndex) => res)
    .catch((err, obs) => console.log(err))
    .subscribe(res => {
        showText.innerText = res.title;
    })

Rx.Observable
    .fromEvent(showText, 'click')
    .map(e => e.target.innerText)
    .subscribe(res => s.value = res);

const imgList = document.querySelectorAll('img'),
    obs = Rx.Observable
        .fromEvent(document, 'mousemove')
        .map(e => ({ x: e.clientX, y: e.clientY }))


imgList.forEach((item, index) => {
    obs
        .delay(100 + index * 100)
        .subscribe(res => {
            item.style.transform = `translate3d(${res.x}px,${res.y}px,0)`
        })
})

const tvBox = document.querySelector('.tvBox'),
    docMouseMove = Rx.Observable.fromEvent(document, 'mousemove'),
    docMouseUp = Rx.Observable.fromEvent(document, 'mouseup'),
    tvBoxMouseDown = Rx.Observable.fromEvent(tvBox, 'mousedown'),
    validValue = (value, max, min = 0) => Math.max(Math.min(value, max), min);

Rx.Observable
    .fromEvent(document, 'scroll')
    .map(e => tvBox.getBoundingClientRect().bottom < 0)
    .subscribe(res => {
        res ? tvBox.classList.add('changeTvBox') : tvBox.classList.remove('changeTvBox')
    })

tvBoxMouseDown
    .filter(e => tvBox.classList.contains('changeTvBox'))
    .map(e => docMouseMove.takeUntil(docMouseUp))
    .concatAll()
    .withLatestFrom(tvBoxMouseDown, (move, down) => {
        return {
            x: validValue(move.clientX - down.offsetX, window.innerWidth - tvBox.getBoundingClientRect().width, ),
            y: validValue(move.clientY - down.offsetY, window.innerHeight - tvBox.getBoundingClientRect().height, )
        }
    })
    // .concatAll()
    .subscribe(res => {
        tvBox.style.left = res.x + 'px';
        tvBox.style.top = res.y + 'px'
    })

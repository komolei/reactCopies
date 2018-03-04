import Rx from 'rxjs/Rx'
// const btn = document.querySelector('.btn');
// const div = document.querySelector('.div');

require('./scss/index.scss');
// Rx.Observable
//     .fromEvent(btn, 'click')
//     .throttleTime(1000)
//     // .subscribe(()=>console.log('dd'))
//     .map(event => event.clientX)
//     .scan((val, clientX) => val + clientX, 0)
//     .subscribe(r => {
//         div.innerText = r.toString();
//     })
// const useRx =
//     Rx.Observable.create(subscribe => {
//         subscribe.next(1);
//         subscribe.next(2);
//         setTimeout(() => {
//             subscribe.next(3);
//             subscribe.complete();
//         }, 1000);
//     })
// const btn1 = document.querySelector('.btn2转发');

// // const trigger = 

// // const useBtn1 = Rx
// //     .Observable
// //     .fromEvent(btn1, 'click')
// //     .subscribe(() => {
// //         useRx.subscribe({
// //             next: r => console.log('val', r),
// //             error: err => console.log('err', err),
// //             complete: () => console.log('complete')
// //         })
// //     })

// // Rx.Observable
// //     .fromEvent(btn, 'click')
// //     .subscribe(() => trigger)

// const valource = Rx.Observable
//     .interval(1000)
//     // .of([1, 2, 3])
//     // .map(item => console.log('item', item))s

// valource.subscribe({
//     next: r => console.log('r', r),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete')
// })

// create

// const obs = Rx.Observable.create(subscribe => {
//     subscribe.next(1);
//     setTimeout(() => {
//         subscribe.next(2);
//     }, 2000);
//     subscribe.next(3);
// })
// const obs = Rx.Observable.of([1,2,3])

// const obs = Rx.Observable
//     .create(function (observer) {
//         observer.next(1);
//         observer.next(2);
//         // 可以改写成of的形式 看下面例子
//         observer.complete();
//     });

// const anthorObs = Rx.Observable
//     .of(1, 2) // 替换上个例子
//     .subscribe({
//         next: val => console.log(val),
//         error: err => console.log(err),
//         complete: () => console.log('complete')
//     })


// obs.subscribe({
//     next: val => console.log(val),
//     error: err => console.log(err),
//     complete: () => console.log('complete')
// })

// of 当我们想同步地传递某些值的时候

// from 可以接受任何可列举的参数

// const arr = [1, 2, '3', 'komolei'];
// const arr = 'string';
// const arr= new Set([2,3,4]);
// 对于promise也可以使用fromPromise 
// const arr = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(111)
//     }, 2000);
//     res(111);
// })

// fromEvent // 接受给定事件对象的事件类型 如button的click，node中的eventEmitter或其他事件，从而创建observable

// 由于平常接触最多的就是网页，所以选定网页元素中的button来进行演示

// const btn = document.querySelector('button');
// const useBtn =
//     Rx.Observable
//         // .fromEvent(btn, 'click') //接受指定的事件对象:button,事件类型：click
//         .interval(1000)
//         .subscribe({
//             next: val => console.log(val),
//             error: err => console.log("error is ", err),
//             complete: () => console.log("complete")
//         })

// const btn2 = document.querySelector('.btn2');
// Rx.Observable
//     .fromEvent(btn2, 'click')
//     .subscribe({
//         next: val => { console.log(val); useBtn.unsubscribe() }, // 卸载了btn的observable事件
//         error: err => console.log("error is ", err),
//         complete: () => console.log("complete")
//     })

// Rx.Observable
//     // .fromPromise(arr)
//     // .from(arr)
//     // .of(1,2,3)
//     // .empty() // 空，直接进入compete // 表示其没有做任何事情
//     // .never() // 一直存在的却没有都不做的observable
//     // .throw('error is komolei') // 只做一件事就是抛出错误
//     // .interval(1000) // 每一秒送出一个自增的数字 1s之后送出0,2s之后送出1...依次如许
//     // .timer(1000,10000) // 可以指定时间，第一个参数表示第一个值等待的时间，第二个参数表示接下里的值间隔的时间
//     // 1s之后送出0，之后每隔10s送出值
//     .interval(1000)
//     // .map(x => x + 2)
//     .mapTo(5) //将传入的值改变成固定值
//     .subscribe({
//         next: val => console.log(val),
//         error: err => console.log("error is ", err),
//         complete: () => console.log("complete")
//     })


// const valource = Rx.Observable.interval(1000)
// // valource.subscribe({
// //     next: val => console.log(val),
// //     error: err => console.log(err),
// //     complete: () => console.log('complete')
// // })
// valource.take(4)
//     .subscribe({
//         next: val => console.log(val),
//         error: err => console.log(err),
//         complete: () => console.log('complete')
//     })

// const arr=[1,2,3];
// const arr='string';
// const arr=new Set([1,2,3,4])
// const arr = Promise.resolve(1);
// const arr={name:'clc'} // error

// const obs = Rx.Observable
//     // .create(
//     //     subscribe => {
//     //         subscribe.next(1);
//     //         setTimeout(() => {
//     //             subscribe.next(2);
//     //             subscribe.next(3);
//     //         }, 2000);
//     //         subscribe.next(4);
//     //     }
//     // )
//     // .of(1,2,3)
//     // .from([1,2,3])
//     // .from(arr)
//     // .fromPromise(arr)
//     // .empty() // 存在为空，让别人知道其存在，但是empty什么也不做，直接进入complete 状态
//     // .interval(1000) // 随着时间自增，相当于i++一样
//     // .timer(2000,4000) // 第一个参数表示值第一次出现的时间，第二个参数表示值间隔的时间
//     // .never() // 无法触及的,你知道其的存在，但是never从来不会结束
//     // .fromEvent(btn,'click') // 接收指定元素类型的事件类型    
//     // .throw( 'result is gameover') // 只有一个作用就是抛出错误
//     .timer(1000, 200)
// .subscribe({
//     next: val => console.log(val),
//     error: err => console.log(err),
//     complete: () => console.log('complete')
// })

// setTimeout(() => {
//     obs.unsubscribe(); // 卸载observable 
//     // 对于Event observable而言，尽量使用takeUntil operator
// }, 4000);

// 函式，个儿理解就是接受一个observable,返回新的observable

// const clicks = Rx.Observable.fromEvent(document.body, 'click')
// const resource = clicks.map(e => Rx.Observable.of(1, 2, 3)) 
// const anotherRes = resource.concatAll(); // 将所有元素concat起来
// anotherRes.subscribe(console.log)

// const obs = Rx.Observable
//     // .interval(1000)
//     .timer(0, 500)
//     .map(val => val * 2)
//     // .mapTo(44)
//     // .take(2) // 取到前几个元素就结束
//     // .first() // 取observable送出的第一个元素，然后进入结束状态
//     .takeUntil(clicks) // 在某件事件发生时候，让observable直接发送complete 状态
//     // .filter(x => x >= 44)
//     // .subscribe({ next: val => console.log(val) })
//     // .subscribe(console.log)
//     .subscribe({
//         next: val => console.log(val),
//         error: err => console.log(err),
//         complete: () => console.log('complete')
//     })

// setTimeout(() => {
//     obs.unsubscribe();
// }, 4000);


// var click = Rx.Observable.fromEvent(document.body, 'click');
// var source = click.map(e => Rx.Observable.of(1,2,3));

// var example = source.concatAll();
// example.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

// 拖拽功能


// const content = document.querySelector('.content');

// const body = document.body;

// const contentMouseDown = Rx.Observable.fromEvent(content, 'mousedown')

// const bodyMouseMove = Rx.Observable.fromEvent(body, 'mousemove')

// const bodyMouseUp = Rx.Observable.fromEvent(body, 'mouseup');

// contentMouseDown
//     .map(e => bodyMouseMove.takeUntil(bodyMouseUp))
//     .concatAll()
//     .map(e => ({ x: e.clientX, y: e.clientY }))
//     .subscribe(res => {
//         content.style.left = res.x + 'px';
//         content.style.top = res.y + 'px';
//         // content.style.fontSize = res.x / 10 + 'px';
//     })


// operator 

const source = Rx.Observable.timer(0, 500).take(6);
// const source0 = Rx.Observable.startWith(1111); //error 
const source1 = Rx.Observable.of(1, 2, 3).startWith(9998); // startWith 一开始就发送的值，通常用来保存程序的起始状态
const source2 = Rx.Observable.from(new Set([1, 2, 3]));
const source3 = Rx.Observable.interval(1000).take(3);
const source4 = Rx.Observable.timer(0, 1000).take(4).takeLast(2);
//  Rx.Observable.concat(source1, source2, source3, source4) // concat 跟concatAll一样，依次等待observable发送
// .subscribe(res => console.log(res));

// Rx.Observable.merge(source1, source2, source3, source4).subscribe(res => {
//     // res = res > 2;
//     console.log(res);
// });
// merge observable同步执行送出资料，当observable都结束之后才真的结束,同时其的行为跟or一样，当其中一个observable满足时，
// 进行操作，对于每一个observable都进行相同的操作，就跟上例子中的source1,2,3,4都是进行console.log()操作一样


// and 逻辑

// Rx.Observable
//     .interval(1000)
//     .take(4) // 0 - 1 - 2 - 3
//     .combineLatest( // 推送最新的值进入算式
//         Rx.Observable.interval(0).take(3),
//         // 0 - 1 - 2 - 3 当interval为0的时候，其最后推送的值为2，
//         // 在相同的时间刻度下，上面的interval(1000)根据时间的不同而最新推出的值也不同，为0,1,2,3，所以最后的值为2,3,4,5
//         (x, y) => x + y)
//     .subscribe(console.info);


// zip  // 取前后相同的顺位
// Rx.Observable.interval(1000).take(4).zip(Rx.Observable.interval(100).take(6), (x, y) => x + y).subscribe(console.info);

// withLatestFrom // 具有主从关系的，当oldResource送出值的时候,才会执行callback function

// const oldResource = Rx.Observable.from('stringffffffffffffffffffffff').zip(Rx.Observable.interval(1000).take(3), (x, y) => x);
// const newResource = Rx.Observable.interval(1000).zip(Rx.Observable.interval(1000).take(4), (x, y) => x)

// oldResource.withLatestFrom(newResource, (x, y) => {
//     console.log('x', x, 'y', y);
//     return y > 2 ? x.toUpperCase() : x;
// }).subscribe(console.info);

// .subscribe({
//     next: val => console.log(val),
//     error: err => console.log(err),
//     complete: () => console.log('complete')
// });

// const obs = source
//     // .skip(3);
//     // .takeLast(3)
//     .last()

// obs
//     // .take(10)
//     .subscribe(console.log);

// 完整的拖拽效果

// 监听body scroll的高度，高于tvBox,变换样式

const body = document.body;
const tvBox = document.querySelector('.tvBox');
console.log(tvBox.getBoundingClientRect());
Rx.Observable
    .fromEvent(document, 'scroll')
    .map(e => tvBox.getBoundingClientRect().bottom < 0)
    .subscribe(res => {
        console.info('res', res);
        res ? tvBox.classList.add('changeTvBox') : null;
    });

const mouseDown = Rx.Observable.fromEvent(tvBox, 'mousedown');
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');

mouseDown.map(e => mouseMove.takeUntil(mouseUp))
    .concatAll()
    .map(e => ({ x: e.clientX, y: e.clientY }))
    .subscribe(res => {
        tvBox.style.top = res.y + 'px';
        tvBox.style.left = res.x + 'px';
    })

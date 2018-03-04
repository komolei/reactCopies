import Rx from 'rxjs/Rx';
import { race } from 'rxjs/operators/race';
require('./scss/index.scss');

// const obs = Rx.observable.interval(1000).take(3);
// obs.scan((origin, next) => origin + next, 0).subscribe(res => console.log('res', res));

// scan 相当于 reduce

// const obs = Rx.Observable.interval(1000).take(8),
//     // obs1 = Rx.Observable.interval(1000).take(3).startWith(10);
//     obs1 = Rx.Observable.interval(2000).take(8);

// obs.subscribe({
//     next: val => console.log('val', val),
//     error: err => console.log('err', err),
//     complete: console.log('complete')
// })
// obs1.subscribe({
//     next: val => console.log('val1', val),
//     error: err => console.log('err1', err),
//     complete: console.log('complete1')
// })
// console.log('obs', obs, 'obs1', obs1);
// Rx.Observable
//     .empty()
//     // .zip(obs, (x, y) => x)
//     .merge(obs, obs1)
//     .scan((origin, next) => origin + next, 0).subscribe(res => console.log('res', res));

// buffer family operators 
// buffer 缓存，缓冲，将之前的缓冲数据送出来去形成阵列

// buffer bufferCount bufferTime bufferToggle bufferTime


// const buffer1 = obs.buffer(obs1)
//     .subscribe(res => console.info('buffer is', res));
// // bufferTime 使用时间作为缓冲的依据
// obs.bufferTime(2000).subscribe(res => console.log('bufferTime is ', res));

// // bufferCount 使用数量作为缓冲的依据

// obs.bufferCount(2).subscribe(res => console.log('bufferCount is', res));

// 可以对事件进行过滤,例如规定鼠标的连点才有效

// const btn = document.querySelector('.btn'),
//     btn1 = document.querySelector('.btn1'),
//     CLICK = 'click';
// Rx.Observable
//     .fromEvent(btn, CLICK)
//     .bufferTime(500)
//     .filter(arr => {
//         // console.log('arr', arr); // 怪不得打印出来是数组，麻瓜啊，在bufferTime中的时候就形成了数组，我还想数组哪里来的
//         return arr.length > 2
//     })
//     .subscribe(() => console.log('success'));

// delay 推迟 将事件流推迟到某一时间节点后面，比如在btn点击的5s内才能点击btn1才会打印出‘success'

// Rx.Observable.fromEvent(btn, CLICK).delay(5000).subscribe(() => {
//     Rx.Observable.fromEvent(btn1, CLICK).subscribe(() => console.log('success'))
// })


// const
//     docMouseover = Rx.Observable
//         .fromEvent(document, 'mousemove')
//         .throttleTime(10)
//         .map(e => ({ x: e.clientX, y: e.clientY })),
//     imgs = document.querySelectorAll('img');
// Array.from(imgs).forEach((item, index) => {
//     docMouseover
//         // .delay(600 * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
//         .delay(10 + 100 * index)
//         .subscribe(res => {
//             item.style.transform = `translate3d(${res.x}px,${res.y}px, 0 )`;
//         })
// })

// 上面这个例子实现了图片的拖动

// debounce debounceTime 去抖 用来处理间歇性操作。一段时间后没有收到新的元素，才真正地送出元素，必须等待多少时间才发送
// throttle throttleTime 节流 间隔一段时间后才送出元素，限制频率的作用，如一秒中限制发送的频率

// distinct 去掉重复的值（暂时这样理解）// 对于对象，则要传入一个函数 // 作用相当于set一样。。
// distinct() 可以传入参数，第一个参数是传入函数（看下面的例子）,第二个函数相当于可以去情况缓存的数据，
// 记得rxjs是事件流的，在时间的不断推动下，将之前的数据抛弃或缓存
// Rx.Observable.from('abbcd')
//     .zip(Rx.Observable.interval(300).take(5), (x, y) => x)
//     .distinct()
//     .subscribe(res => console.log('res', res))

// Rx.Observable
//     .from([{ value: 1 }, { value: 2, name: '1' }, { value: 2, name: '11' }, { value: 2, name: '111' }, { value: 3 }, { value: 2 }])
//     .zip(Rx.Observable.interval(300), (x, y) => x)
//     .distinct(obj => obj.value, Rx.Observable.interval(1000)) // 在这里name:'11'的obj 就被抛弃了
//     .subscribe(res => console.log(res));

// // distinctUntilChanged 同样会过滤相同的数据，但是其只会跟最后送出来的值进行比较

// Rx.Observable.from('aaddcsd')
//     .zip(Rx.Observable.interval(300), (x, y) => x)
//     .distinctUntilChanged()
//     .subscribe(res => console.log(`${res}`)) // a-d-c-s-d

// error handling operators

// catch 可以捕捉到错误，同时可以传入一个回调observable,array,iterable,promise,
// 同时其可以接收第二个参数，这个参数可以接收当前的observable,然后我们可以回传函数进行再一次执行
// Rx.Observable.from(['a', 'b', 'c', 2, 'd', 'e'])
//     .zip(Rx.Observable.interval(300).take(10), (x, y) => x)
//     .map(item => item.toUpperCase())
//     // .catch(err => console.error(err)) // 2 没有toUpperCase() method,则会报错
//     // .catch(err => Rx.Observable.of('i').map(item => item.toUpperCase())) // 当发生错误的时候，回传个observable
//     // .catch(err => Rx.Observable.empty()) // error发生，直接传入empty来结束
//     // .catch((err, obs) => obs) // -A-A-A-A-A... // 适合用于断线重连的情况 可以用retry()替代
//     // .retry(3) // 重新尝试 // 可以适用于即时同步通信连接，request的时候，请求几次不行的时候在进行报错
//     // .catch(err => Rx.Observable.empty())
//     // .retryWhen(errObs => errObs.delay(2000))
//     .catch((err, obs) =>
//         Rx.Observable
//             .empty()
//             .startWith(`出现错误，正在重新连线`)
//             .concat(obs.delay(4000)))
//     .subscribe(console.log)
// // repeat() // 重复订阅效果，但是没有错误的，可以使用这个api
// // Rx.Observable.of('st')
// //     .zip(Rx.Observable.timer(0, 100), (x, y) => x)
// //     .repeat(3)
// //     .subscribe(console.log)

// // Rx.Observable.from([{ value: 1 }, { value: 2 }, { value: 1 }, { value: 2 }, { value: 1 }])
// Rx.Observable.from('sfffssx')
//     .zip(Rx.Observable.interval(100), (beforeValue, afterValue) => beforeValue)
//     // .distinct(item=>item.value)
//     // .distinctUntilChanged(item => item.value)
//     .distinctUntilChanged()
//     .subscribe(console.log)

// concatAll 形成一维数列，等前一个observable完成才会进行下一个observable

// switch 取最新的值，永远只处理最新的observable

// mergerAll 并行处理observable，其还接受参数例如mergerAll(number),
// number表示当前并行observable的数量是多少，当为1的时候，行为跟concatAll一样
// 老是忘记concat的作用：讲多个observable合并成一个observable。

// const obs1=Rx.Observable.of(-1,-2),
// obs2=Rx.Observable.interval(100).take(3),
// obs3=Rx.Observable.interval(500).skip(2),
// obs4=Rx.Observable.interval(100).take(4).last();
// const obss=obs1.concat(obs2,obs3,obs4).subscribe(res=>console.log(res));
// setTimeout(() => {
//     obss.unsubscribe();
// }, 4000);

// concatMap 相当于map 和concat的结合体
// 要确定内部observable比外部的observable完成快的情况下，
// 不希望有并行的操作，适用于一次到底的ui操作和一些特殊的request情况

// const resource = Rx.Observable.interval(1000).take(4),
//     btn = document.querySelector('.btn');

// const getFetchData = () =>
//     fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//         .then(r => r.json());
// Rx.Observable.fromEvent(btn, 'click')
//     // .map(e => resource)
//     // .concatAll()
//     // 这两句话可以修改成concatMap()，当时其中还是要传入函数
//     // 同时其还接受两个参数，分别为（e,res,eIndex,resIndex)
//     // 外部observable送出的元素，内部observable送出的元素，
//     // 外部observable送出元素的index,内部observable送出元素的index
//     // .concatMap(e=>resource)
//     .concatMap(e => Rx.observable.from(getFetchData()), (e, res, eIndex, resIndex) => {
//         console.log('res',res);
//     })// 应该适用与发请求的时候，得到外部的数据
//     .subscribe({
//         next: val => console.log(val),
//         error: err => console.log(err),
//         complete: () => console.log('complete')
//     })

// switchMap 相当于switch 和 map 的结合
// 只要最后一次行为的结果，适合绝大多数的场景下

// const resuorce = Rx.Observable.interval(100).take(4),
//     getFetchData = () => fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//         .then(r => r.json());

// Rx.Observable.fromEvent(document, 'click')
//     // .map(e => resuorce)
//     // .switch() // 永远取最新的observable的数据
//     // .switchMap(e => resuorce)
//     // 适用于自动完成，当在搜索框输入完所有字之后，就能得到结果，
//     // 也接受两个参数，跟concatMap的第二个参数一样，演示一波
//     // .switchMap(e => Rx.Observable.from(getFetchData()))
//     .switchMap(e => Rx.Observable.from(getFetchData()),
//     (e, res, eIndex, resIndex) => res)
//     .subscribe(console.log)

// mergeMap merge add map
// 并行处理，同时可以传入第三个参数来限制并行处理的数量
// 并行的情况，多I/O处理

// Rx.Observable.fromEvent(document, 'click')
//     .mergeMap(e => getFetchData(), (e, res, eIndex, resIndex) => res, 2)
//     .subscribe(res => console.log(res))

// auto complete functionality

// const inputText = document.querySelector('input[type=text]'),
//     showDataInP = document.querySelector('.autoComplete>p'),
//     getRequestData = (value) =>
//         fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
//             .then(res => res.json());

// Rx.Observable
//     .fromEvent(inputText, `input`)
//     .filter(e => e.target.value.length > 2)
//     .debounceTime(1000)
//     // .delay(100)
//     .switchMap(e => {
//         return Rx.Observable.from(getRequestData(e.target.value)).retry(3)
//     }, (e, res, eIndex, resIndex) => res)
//     .catch(err => console.error('err', err))
//     .subscribe(res => showDataInP.innerText = res.title)
// Rx.Observable
//     .fromEvent(showDataInP, 'click')
//     .map(e => {
//         console.info(e);
//         return e.target.innerText
//     })
//     .subscribe(res => inputText.value = res)

// 之前的operator都是将几个observable组合起来成为新的observable，
// some observables ---> heigh order observable

// 现在我们要反着来了
// 所以就有几个operators,

// groupBy

// Rx.Observable.interval(100)
//     .take(5)
//     .groupBy(value => value % 2)
//     .subscribe(console.log)

// window windowCount windowToggle windowTime windowWhen // 没有用过。。。

// observable 和阵列的区别
// 延迟计算 只有订阅了才会去计算
// 渐进式计算 想想map,filter操作符，都是对其中的元素进行运算形成返回值,才进入下一个运算
// 只不过有一些送出的值被过滤掉了，有一些送出的值被console.log()出来了

// subject 存储observer的一个队列 [observer,observer1,observer2]

import {Subject} from 'rxjs';
const sub=new Subject();
sub.subscribe(val=>console.log(val));
sub.subscribe(val=>console.log('hello',val))
sub.next(2);

// 好吧，这几天在写公司的业务，很烦心，年前写的，年后来看，发现一点看的兴趣都没有
// 然后调试接口，干了两天，组长觉得要重写业务逻辑，
// 不多说了，三月份真的任务重的赶脚
// 真的应该在年前把所有的东西都写好，现在不上不下贼尴尬
// 明天还是去实现一些动画效果把。


import Rx from 'rxjs/Rx';

// const sub=Rx.Observable.interval(100).take(3),
const a = {
    next: val => console.log(val),
    error: err => console.log(err),
    complete: () => console.log('complete')
},
    b = {
        next: val => console.log(val),
        error: err => console.log(err),
        complete: () => console.log('complete')
    }

// sub.subscribe(a);
// sub.subscribe(b);

// 为了适用第二个订阅得到第一个订阅发出的元素，而推出了subject

const sub = new Rx.Subject();

// sub.subscribe(a);
// sub.next(1);
// sub.next(2);
// sub.next(3);
// sub.subscribe(a);

// setTimeout(() => {
//     sub.next(5);
//     sub.subscribe(b);
//     sub.next(6);
// }, 2000);
// sub.next(4);

// 1-2-3-4-5-5-6-complete-6-complete error
// 1-2-3-4-5-6-6 // 要订阅完之后才使用值，订完之后才有值


// BehaviorSubject

// const beSub=new Rx.BehaviorSubject(0) // 得到最新的值

// beSub.subscribe(a);
// beSub.next(1);
// beSub.next(2);
// beSub.next(3);
// setTimeout(() => {
//     beSub.next(5);
//         beSub.subscribe(b); // 在订阅的时候，要取一次，所以多了个五
//     beSub.next(6);
// }, 2000);
// beSub.next(4)

//  0-1-2-3-4-5-5-6-6

// const reSub = new Rx.ReplaySubject(2); // 取事件再次发生时，最后送出的几个元素

// reSub.subscribe(a);
// reSub.next(1);
// reSub.next(2);
// reSub.next(3);
// setTimeout(() => {
//     reSub.next(5)
//     reSub.subscribe(b); 
//     // 这里取前面的元素值，然后进行到next(6)，两个observable都订阅到了，所以打出2个6
//     reSub.next(6);
// }, 2000);
// reSub.next(4);

// // 1-2-3-4-5-4-5-6-6

// const asyncSub = new Rx.AsyncSubject(); // 取最后送出的元素 要加上complete()

// asyncSub.subscribe(a);
// asyncSub.next(1);
// asyncSub.next(2);
// asyncSub.next(3);
// asyncSub.complete();
// setTimeout(() => {
//     asyncSub.next(5);
//     asyncSub.subscribe(b);
//     asyncSub.next(6);
// }, 2000);
// asyncSub.next(4);

// 3,complete--3,complete

// 上面这样写太麻烦，所以发明了mutilcast来简化流程,但是需要connect来激活的

const resource = Rx.Observable.interval(100).take(4)
    // .multicast(new Rx.Subject());
    // .publish()
    // // .publishBehavior(0)
    // // .publishReplay(2)
    // // .publishLast()
    // .refCount()
    .share() // publish+refCount

resource.subscribe(a)

// let subscription=resource.connect(); // 这样才真正地开始计算

// setTimeout(() => {
//     subscription.unsubscribe()
// }, 400);
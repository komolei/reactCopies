import Rx from 'rxjs/Rx'

// scheduler 调度者，用来确定subscription的执行顺序

const observable = Rx.Observable.interval(100).take(4),
    observer = {
        next: val => console.log(val),
        error: err => console.log(err),
        complete: () => console.log('complete')
    }

// observable.subscribe(observer);

console.log('11');
observable.observeOn(Rx.Scheduler.animationFrame).subscribe(observer);
console.log('22');



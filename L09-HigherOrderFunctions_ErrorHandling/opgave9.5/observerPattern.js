function subject(){
    let observers = [];

    function registerObserver(observer){
        observers.push(observer);
    }

    function removeObserver(observer){
        observers.remove(observer);
    }

    function notifyObservers(){
        observers.forEach(observer => observer.notify);
    }
}

function observer(){
    function notify(){
        console.log("I got notified");
    }
}


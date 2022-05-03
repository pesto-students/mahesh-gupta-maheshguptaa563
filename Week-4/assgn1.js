// https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a
// Able to complete this assignment because of my fellow classmate Vasu Vallabh with reference to the above blog


const randomNumber = () => Matsh.floor(Math.random()*101);

class CustomPromise {
    constructor(handler) {
        this.status = "pending";
        this.value = null;

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        }

        const reject = (value) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };
    }

        then(onFulfilled) {
            if(this.status === 'fulfilled') {
                onFulfilled(this.value);
            }
        }

        catch(onRejected) {
            if(this.status === 'rejected') {
                onRejected(this.value);
            }
        }

}

const p1 = new CustomPromise((resolve,reject) => {
 if ((randomNumber()%5) !== 0) {
  resolve('Promise Resolved')
 } else {
     reject('Promise Rejected')
 }
});
p1.then((res) => console.log(res));
p1.catch((res) => console.log(res));

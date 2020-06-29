
class Store {
  counter = 0

  step = 1

  max = 99999

  min = -99999

  isNumber = (value) => typeof value === 'number' && isFinite(value)

 isValueNamber =(value, prevValue) => {
   this.counter = +(this.isNumber(+value) ? value : prevValue)
   return this.counter
 }

 increase = () => {
   this.counter += this.step
   return this.getCounter()
 }

 decrease = () => {
   this.counter -= this.step
   return this.getCounter()
 }

 setCounter = (value) => {
   this.counter = value
 }

 setStep =(step) => {
   this.step = step
 }

 getCounter = () => this.counter
}

const store = new Store()
export default store
export { Store }

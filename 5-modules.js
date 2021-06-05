// Web browser
// <script src=""></script>
// <script src=""></script>
// <script src=""></script>

// AMD, RequireJS

// ESModule
// <script type="module" src=""></script>
// .js <-- export, import

// CommonJS (Node.js)
// .js <-- module.exports, require()

// const say = require('./_say')
const { a, b, sum } = require('./_say.js')

console.log(a)
console.log(b)
console.log(sum(4, 2))

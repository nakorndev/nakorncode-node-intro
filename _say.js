// export default 'Hello world!'    // ES
// export const a = 10
// export const b = 20
// export function sum(x, y) { return x + y }

// module.exports = 'Hello world!'  // CommonJS

module.exports = {
    a: 10,
    b: 20,
    sum(x, y) {
        return x + y
    }
}

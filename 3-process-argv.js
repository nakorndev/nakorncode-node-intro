// node 3-process-argv.js admin 1234

console.log(process.argv)

const username = process.argv[2]
const password = process.argv[3]

if (!username) {
    console.warn('Username is empty')
} else if (!password) {
    console.warn('Password is empty')
} else if (username != 'admin' || password != '1234') {
    console.warn('Incorrect')
} else {
    console.log('Welcome admin!')
}

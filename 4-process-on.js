// process.addEventListener

process.on('exit', () => {
    console.log('Bye!')
})

process.on('SIGINT', () => {
    console.log('Bye! (Ctrl + C)')
    process.exit()
})

console.log('Welcome...')

setInterval(() => {
    console.log('Process success')
}, 3000)

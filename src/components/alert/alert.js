function notice(options) {
    console.log('----', options)
}

export default {
  info (options) {
    return notice(options)
  }
}
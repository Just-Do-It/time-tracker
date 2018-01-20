export default {
  methods: {
    formatHours(time) {
      return Math.floor(time / 1000 / 60 / 60)
    },
    formatMinutes(time) {
      return Math.floor(time / 1000 / 60) % 60
    },
    formatSeconds(time) {
      return Math.floor(time / 1000) % 60
    }
  },
  filters: {
    formatTwo(value) {
      return value.toString().length <= 1 ? "0"+value : value
    }
  }
}

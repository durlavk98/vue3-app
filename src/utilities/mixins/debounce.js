const debounce = {
  data() {
    return {
      timeout: '',
    }
  },
  methods: {
    debounce(func, wait = 1000) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(func, wait);
    }
  }
}

export default debounce;
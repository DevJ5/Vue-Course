const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: null,
      confirmedName: null,
    };
  },
  methods: {
    increment(e, number) {
      console.log(e);
      if (number) this.counter += number;
      else this.counter++;
    },
    decrement() {
      this.counter--;
    },
    changeName(e) {
      this.name = e.target.value;
    },
    confirmInput(e) {
      this.confirmedName = this.name;
      e.target.value = null;
    },
    submitForm(e) {
      console.log('form submitted');
    },
  },
});

app.mount('#events');

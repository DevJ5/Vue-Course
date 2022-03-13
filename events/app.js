const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      confirmedName: '',
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
    confirmInput(e) {
      this.confirmedName = this.name;
      this.name = '';
    },
    submitForm(e) {
      console.log('form submitted');
    },
    resetInput(e) {
      this.firstName = '';
    },
  },
  computed: {
    fullName() {
      console.log('fullName computed runs');
      if (this.firstName === '') return '';
      // return 'a';
      return this.firstName + ' ' + 'Egelschlager';
    },
  },
  // watch can also watch computed variables and will run when the return value changes
  watch: {
    firstName(newValue, oldValue) {
      setTimeout(() => {
        console.log(
          `Name changed from ${oldValue} to ${newValue}, send httprequests. ${this.fullName}`
        );
      }, 2000);
    },
    fullName(newValue, oldValue) {
      console.log('fullName watcher runs', newValue, oldValue);
    },
  },
});

app.mount('#events');

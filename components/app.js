const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5667 89',
          email: 'manuel@localhost.com',
        },
        {
          id: 'amy',
          name: 'Amy Lorenz',
          phone: '01234 5667 89',
          email: 'amy@localhost.com',
        },
      ],
      showDetails: false,
    };
  },
  methods: {},
});

app.component('friend-contact', {
  props: ['friend'],

  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount('#app');

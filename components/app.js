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
  template: `    
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
    </li>`,
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

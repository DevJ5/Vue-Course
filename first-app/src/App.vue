<template>
  <div>
    <h2>My Friends</h2>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :friend="friend"
        @toggle-favorite="toggleFavorite"
      >
      </friend-contact>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5667 89',
          email: 'manuel@localhost.com',
          isFavorite: true,
        },
        {
          id: 'amy',
          name: 'Amy Lorenz',
          phone: '01234 5667 89',
          email: 'amy@localhost.com',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const friend = this.friends.find((friend) => friend.id === id);
      friend.isFavorite = !friend.isFavorite;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>

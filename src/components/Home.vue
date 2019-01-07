<template>
  <div class="home container center">
    <div class="card">
      <div class="card-content">
        <h2 class="teal-text">Bienvenue</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Entrez votre pseudo</label>
          <input type="text" name="name" v-model="name">
          <p class="red-text">{{ feedback }}</p>
          <button class="btn teal">Entrer dans le chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name){
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        this.feedback = "Veuillez entrer un pseudo"
      }
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 400px;
  margin-top: 100px;
}
h2 {
  font-size: 3em;
}
button {
  margin: 30px auto;
}
</style>

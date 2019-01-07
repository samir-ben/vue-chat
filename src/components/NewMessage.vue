<template>
    <div class="new-message">
        <form @submit.prevent="addMEssage">
            <label for="new-message">Nouveau message (pressez entrer)</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
        </form>
    </div>
</template>


<script>
import db from '@/firebase/init';

export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMEssage(){
            if(this.newMessage){
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err =>{
                console.log(err);
            })
                this.newMessage = null;
                this.feedback = null;
            } else {
                this.feedback = "Vous devez entrer un message"
            }
        }
    },    
}
</script>

<style scoped>

</style>

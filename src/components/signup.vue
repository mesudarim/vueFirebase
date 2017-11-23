<template>
  <div class="signup">
    <p>Let's create an account</p>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button v-on:click="signup">Sign Up</button>
    <span>or go back to the <router-link to="/login"> login</router-link></span>
  </div>
</template>

<script>

  import firebase from 'firebase'

  export default{
    name: 'signup',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },
    methods:{
      signup: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          function(err){
            alert('Oups ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped >
  .signup {
    margin-top: 40px;
  }

  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>

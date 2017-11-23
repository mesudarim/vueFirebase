<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" name="" value=""><br>
    <input type="password" v-model="password" placeholder="Password" name="" value=""><br>
    <button v-on:click="signin">Connection</button>
    <p>You dont have an account? You can <router-link to="/signup"> create one</router-link> </p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default{
    name: 'login',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      signin: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          function(err){
            alert('Oups. ' + err.message)
          }
        )
        // this.$router.replace('hello')
      }
    }
  }
</script>

<style scoped media="screen">
  .login{
    margin-top: 40px;
  }

  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a{
    text-decoration: underline;
    cursor: pointer;
  }

</style>

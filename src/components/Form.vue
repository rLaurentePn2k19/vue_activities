<template>
  <div class="login">
   <!-- <h1>{{ "Click to login" }}</h1> -->
   <!-- <button class="btn btn-primary" v-on:click="show()">Login</button> -->
   <!-- <modal name="login"> -->  
    <mdb-container>
    <mdb-row>
      <mdb-col size="12" class="text-center mb-5">
        <mdb-btn v-on:click.native="showModal = true" color="info">Login</mdb-btn>
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header  id="header" class="secondary-color white-text">
            <h2 class="text-center">Login</h2>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <mdb-input size="sm" name="username" v-model="input.username" icon="user" group type="text" validate error="wrong" success="right" placeholder="Username"/>
            <mdb-input size="sm" name="password" v-model="input.password" icon="key" group type="password" validate error="wrong" success="right" placeholder="************"/>
          </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" v-on:click.native="showModal = false">Close</mdb-btn>
            <mdb-btn color="primary"  v-on:click="login()" type="submit">Login</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  <!--  </modal> -->
</div>
  
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbTextarea, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
export default {
  name: 'Form',
  components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbInput,
      mdbTextarea,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter
    },
  beforeCreate(){
    console.log("Before Create!")
  },
  created(){
    console.log("Created!")
  },
  beforeMount(){
    console.log("Before Mount")
  },
  mounted(){
    console.log("Mounted!")
  },
  beforeUpdate(){
    console.log("Before Update")
  },
  updated(){
    console.log("Updated!")
  },
  beforeDestroy(){
    console.log("Before Destroy")
  },
  destroyed(){
    console.log("Destroyed!")
  },
  
  data(){
    return {
      showModal: false,
        input: {
              username: "",
              password: ""
            }
      }
  },
  props: {
    msg: String
  },
  methods: {
    login(){
      if(this.input.username != "rCute69" && this.input.password != "qwerty123" || this.input.username == "" && this.input.password == ""){
        window.alert("Invalid username or password");
        console.log(this.input.username)
        console.log(this.input.password)
      }else{
        window.alert("Welcome "+ this.input.username)
        console.log(this.input.username)
        console.log(this.input.password)
      }
    },
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header{
  position: relative;
}
</style>


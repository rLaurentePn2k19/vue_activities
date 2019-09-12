<template>
  <div class="login">
    <h1>{{ "Click to login" }}</h1>
    <button class="btn btn-primary" v-on:click="show()">Login</button> 
    <modal name="login">   
        <form method="post">
            <div class="modal-header">				
                <h4 class="modal-title">Login</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">				
                <div class="form-group">
                    <label>Username</label>&nbsp;
                    <input type="text" class="form-control" required="required" placeholder="Username">
                </div>
                <div class="form-group">
                    <div class="clearfix">
                        <label>Password</label>&nbsp;</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" class="pull-right text-muted"><small>Forgot Password?</small></a>
                    </div> 
                    <input type="password" class="form-control" placeholder="**********" required="required">
                </div>
            </div>
            <div class="modal-footer">
                <label class="checkbox-inline pull-left"><input type="checkbox">Remember me</label>
                <input type="submit" class="btn btn-primary pull-right" value="Login">
            </div>
        </form>
    </modal>
</div>
  
</template>

<script>

export default {
  name: 'Form',
  props: {
    msg: String
  },
    methods: {
        show () {
            this.$modal.show('login');
            console.log("showed")
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


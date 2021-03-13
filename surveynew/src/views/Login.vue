<template>
  <v-app style="background-image:url(http://imgs.aixifan.com/o_1c58i5d1i1cubg6i1u25gp1p333.jpg)">
    <v-container>
      <v-alert type="error" v-if="juage_inputerror" :value="this.alertWhat">
        {{alertWhat}}
      </v-alert>
      <v-alert type="error" v-if="juage_none"> 未输入用户名/密码。 </v-alert>
      <div class="background">
        <v-img src="../assets/lg.png" height="250px"></v-img>
        <v-content>
          <v-col offset="2" cols="8">
            <v-card elevation="7" outlined shaped color="dark">
              <v-col offset="2" cols="8">
                <v-text-field
                  v-model="users_name"
                  :counter="10"
                  label="请输入您的用户名"
                  required
                  autofocus
                  maxlength="10"
                ></v-text-field>
                <div>
                  <v-text-field
                    maxlength="12"
                    :type="!eyeon ? 'password' : 'text'"
                    v-model="users_passord"
                    label="请输入您的密码"
                    required
                    :append-outer-icon="eyeon ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-outer="changeeye()"
                    clearable
                    hide-details
                    @keyup.enter="login"
                  >
                  </v-text-field>
                </div>
                <v-col offset="1" cols="11">
                  <v-btn text style="margin-right: 40px"  @click="gohome()">前往首页</v-btn>
                      <v-btn color="primary" x-large @click="login()">登录 </v-btn>
                      <v-btn text style="margin-left: 50px"  @click="goregister()">立即注册</v-btn>
                </v-col>
              </v-col>
            </v-card>
          </v-col>
        </v-content>
      </div>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    juage_eye: true,
    users_name: "",
    users_passord: "",
    eyeon: false,
    juage_inputerror: false,
    juage_none: false,
    isLogin:false,
    alertWhat:"",
  }),
  components: {
    HelloWorld,
  },
  methods: {
    clearit() {},
    changeeye() {
      this.eyeon = !this.eyeon;
    },
    login: function () {
      axios({
        url:'http://localhost:8080/user/login',
        method:'post',
        data:{
          "userId": this.users_name,
          "userPassword": this.users_passord,
        }
      })
      .then(response => {
        switch(response.code) {
          case 200:this.$route.push({path: '/', params: {
            code: response.code, userId: response.userId, username: response.username}
            });break;
          case 400:
            this.alertWhat = response.msg;
            break;
        }
      })
    },
    goregister(){
      this.$router.push('/register')
    },
    gohome(){
      this.$router.push('/')
    }
  },
};
</script>

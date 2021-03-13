<template>
  <v-app style="background-image:url(http://imgs.aixifan.com/live/1494129052240/1494129052240.jpg)">
    <v-container>
      <v-alert type="error" v-if="juage_none"> 未输入用户名/密码。 </v-alert>
      <v-alert type="error" v-if="alert_juage_accept"> 请勾选同意协议。 </v-alert>
      <v-alert type="error" v-if="juage_usernamne_length"> 用户名长度不符合规则 </v-alert>
      <v-alert type="error" v-if="alert_passord"> 密码不符合规则 </v-alert>
      <div class="background">
        <v-img src="../assets/register.png" height="250px"></v-img>
        <v-content>
          <v-row align="start" justify="center">

          <v-col cols="8">
            <v-card elevation="7" outlined shaped color="dark">
              <v-row align="start" justify="center">
                <v-col cols="8" >
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                              v-model="reg_user_name"
                              style="margin-top: 30px"
                              label="请设置您的用户名"
                              maxlength="14"
                              required
                              autofocus
                              v-bind="attrs"
                              v-on="on"
                              @keyup="juage_length()"
                      ></v-text-field>
                    </template>
                    <span>中英文均可 最长14个英文或7个汉字</span>
                  </v-tooltip>
                  <div>
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                                maxlength="12"
                                :type="!eyeon ? 'password' : 'text'"
                                v-model="reg_user_passord"
                                label="请设置您的登录密码"
                                required
                                :append-outer-icon="eyeon ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append-outer="changeeye()"
                                clearable
                                hide-details
                                @keyup.enter="register()"
                                v-bind="attrs"
                                v-on="on"
                                @keyup="juage_passord_correct()"
                        >
                        </v-text-field>
                      </template>
                      <span>密码长度为8-16字符 只能由英文和数字组成</span>
                    </v-tooltip>

                    <v-checkbox
                            label="是否同意协议"
                            color="success"
                            value="是否同意协议"
                            hide-details
                            @click="accept"
                    ></v-checkbox>
                  </div>
                  <v-col offset="1" cols="12">
                    <v-btn text style="margin-right: 50px"  @click="gohome()">前往首页</v-btn>
                    <v-btn color="primary" x-large @click="register()" style="margin-bottom: 10px">注册 </v-btn>
                    <v-btn  text style="margin-left: 50px" @click="gologin()">已有账户，立即登录</v-btn>
                  </v-col>
                </v-col>
              </v-row>

            </v-card>
          </v-col>

          </v-row>
        </v-content>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "register",
  data: () => ({
    reg_user_name:"",
    reg_user_passord:"",
    juage_eye: true,
    users_name: "",
    users_password: "",
    eyeon: false,
    juage_none: false,
    juage_usernamne_length:false,
    juage_tips_passord:false,
    alert_juage_accept:false,
    output_alert_accept:false,
    alert_passord:false,
    accept_passord:false,
  }),
  methods: {
    juage_length(){
      let userslength=0;
      for (let i=0;i<this.reg_user_name.length;i++){
          if((this.reg_user_name[i]>='a'&&this.reg_user_name[i]<='z')||(this.reg_user_name[i]>='A'&&this.reg_user_name[i]<='Z')||(this.reg_user_name[i]>=0&&this.reg_user_name[i]<=9)){
            userslength++;
          }
          else{
            userslength+=2;
          }
      }
      if(userslength>14){
        this.juage_usernamne_length=true;
      }
      else{
        this.juage_usernamne_length=false;
      }
    },
    juage_passord_correct(){
      let i=this.reg_user_passord.length-1;
      if(this.reg_user_passord.length==0){
        return 0;
      }
        if(!((this.reg_user_passord[i]>='a'&&this.reg_user_passord[i]<='z')||(this.reg_user_passord[i]>='A'&&this.reg_user_passord[i]<='Z')||(this.reg_user_passord[i]>=0&&this.reg_user_passord[i]<=9))){
              this.alert_passord=true;
        }
        else{
          this.alert_passord=false;
        }
    },
    changeeye() {
      this.eyeon = !this.eyeon;
    },
    accept(){
      this.alert_juage_accept=false;
      this.output_alert_accept=!this.output_alert_accept;
    },
    register() {
      this.accept_passord=true;
      for (let i=0;i<this.reg_user_passord;i++){
          if(!(this.reg_user_passord[i]>='a'&&this.reg_user_passord[i]<='z')||(this.reg_user_passord[i]>='A'&&this.reg_user_passord[i]<='Z')||(this.reg_user_passord[i]>=0&&this.reg_user_passord[i]<=9)){
            this.accept_passord=false;
            this.alert_passord=true;
            break;
        }
      }
      if (this.accept_passord&&this.output_alert_accept&&!this.juage_none&&!this.alert_passord
      ) {this.$router.push('/');
      } else {
        this.juage_none = false;
      }
      if (this.reg_user_name == "" || this.reg_user_passord == "") {
        this.juage_none = true;
        this.juage_inputerror = false;
      }
      if(!this.output_alert_accept){
        this.alert_juage_accept=true;
      }
    },
    gologin(){
      this.$router.push('/login')
    },
    gohome(){
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
</style>
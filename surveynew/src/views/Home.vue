<template>
    <v-app>
        <div>
            <v-app-bar
                    color="#CCCCCC"
                    dense
                    dark
                    absolute
            >
                <v-btn
                        color="#0099CC"
                        dark
                        style="margin: 5px"
                        @click="goHome()"
                >
                    <v-icon>mdi-home</v-icon>
                    首 页

                </v-btn>
                <template>
                    <div class="text-center">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        color="#0099CC"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        style="margin: 10px"
                                >
                                    测 试
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                        v-for="(item, index1) in lists"
                                        :key="index1"
                                >
                                    <v-btn>
                                        <v-list-item-title @click="redirect(index1)">
                                            {{ item }}
                                        </v-list-item-title>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </template>
                <v-btn
                        color="#0099CC"
                        dark
                        style="margin: 5px"
                        @click="goResult()"
                >
                    结 果

                </v-btn>
                <v-spacer></v-spacer>
                <div v-if="!isLogin">
                    <v-btn
                            color="#99CC99"
                            dark
                            style="margin: 5px"
                            @click="goLogin()"
                    >
                        登录

                    </v-btn>
                    <v-btn
                            color="#CCCC99"
                            dark
                            style="margin: 5px"
                            @click="goRegister()"
                    >
                        注册

                    </v-btn>

                </div>
                <h1>{{$route.params.user_name}}</h1>
                <v-menu offset-y v-if="isLogin">
                    <template v-slot:activator="{ on, attrs }">
                        <v-avatar>
                            <img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                    v-bind="attrs"
                                    v-on="on"
                            >
                        </v-avatar>
                    </template>
                    <v-list>
                        <v-list-item
                                v-for="([icon,option], index2) in functions"
                                :key="index2"
                        >
                            <v-btn @click="quit()">
                                <v-icon>{{icon}}</v-icon>
                                {{option}}
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
        </div>
        <router-view></router-view>
    </v-app>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        created() {
        },
        data: () => ({
            lists: ["问卷1", "问卷2", "问卷3", "问卷4", "问卷5"],
            functions: [["mdi-logout", "退出登录"]],
            id: 123,
            isLogin:true,
        }),
        methods: {
            redirect(index1) {
                this.$router.push({name:'home'});
                this.$router.push({name: 'surveymodel', query: {id: index1+1}});
                this.$router.go(0);
            },
            goHome() {
                this.$router.push('/');
            },
            goResult() {
                this.$router.push('result');
            },
            goLogin() {
                this.$router.push('login');
            },
            goRegister() {
                this.$router.push('register')
            },
            quit(){
                this.isLogin=false;
            }
        }
    }
</script>

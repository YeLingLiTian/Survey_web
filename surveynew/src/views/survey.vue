<template>
    <v-app  style="background-image:url(https://img.cdn.gaein.cn/bing/LVT0OK4F.jpg)">

            <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
            >
                <div   v-for="(item,i) in surveypics">
                    <v-col
                            offset="2"
                            cols="5"
                            :key="i"
                    >
                        <v-hover v-slot="{ hover }">
                            <v-card
                                    :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }"
                                    link
                                    style="padding: 10px"
                                    height="400"
                                    color="#CCFFCC"
                                    @click="gosurvey(i)"
                            >
                                <v-img :src="item.src" height="70%">
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </div>
            </v-row>
    </v-app>
</template>

<script>
    export default {
        name: "survey",
        data:()=>({
            surveypics:[{
                src:require("../assets/surveypic1.png"),
            },
                {
                    src:require("../assets/surveypic2.png"),
                },
                {
                    src:require("../assets/surveypic3.png"),
                },
                {
                    src:require("../assets/surveypic4.png"),
                },
                {
                    src:require("../assets/surveypic5.png"),
                },],
    }),
        methods:{
          gosurvey(index){
              this.$router.push({name: 'surveymodel', params: {id: index}});
          }
        },
    }
</script>

<style scoped>

</style>
<template>
    <v-app>
    <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            height="700px"
            style="margin: 10px"
            hide-delimiter-background
    >
        <v-carousel-item
                v-for="(slide, i) in pics"
                :key="i"
        >
            <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
            >
                <v-img :src="slide" contain style="weidth:auto;
height:100%"></v-img>
            </v-row>
        </v-carousel-item>
    </v-carousel>
        <v-col offset="4" cols="3">
    <v-btn
            class="ma-2"
            outlined
            color="indigo"
            style="top:-200px"
            height="100px"
            width="500px"
            @click="gosurvey()"
    >
        点击前往测试！
    </v-btn>
        </v-col>
    </v-app>
</template>

<script>
    export default {
        name: "actiongo",
        data:()=>({
            pics:["https://nimg.ws.126.net/?url=http%3A%2F%2Fspider.ws.126.net%2F8aef65deaffadf8121a9d528d9208fb9.jpeg&thumbnail=650x2147483647&quality=80&type=jpg"
                ,"http://jc0918.com/uploads/allimg/190610/2-1Z610162K2O0.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1640221463,584651213&fm=26&gp=0.jpg"]
        }),
        methods:{
          gosurvey(){
              this.$router.push('survey');
          }  ,
        },
    }
</script>

<style scoped>

</style>
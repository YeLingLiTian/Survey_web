<template>
  <v-app style="background-image: linear-gradient(#6495ed, #f8f8ff)">
    <v-col offset="2" cols="8">
      <v-card style="margin-top: 100px">
        <v-col offset="5" cols="4">
          <h1
            style="
              color: #ee6363;
              background-color: black;
              text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px,
                rgba(255, 255, 255, 0.2) 1px 3px 3px;
              -webkit-background-clip: text;
              margin-top: 60px;
              margin-left: 5%;
            "
          >
            结 果
          </h1>
        </v-col>
        <v-col cols="12" offset="1">
          <HR
            style="border: 1 dashed #987cb9; margin-bottom: 35px"
            width="80%"
            color="#987cb9"
            SIZE="1"
          />
            <h1>评测结果</h1>
            <p style="margin-left: 10%;margin-top: 5%;width:60%" >阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴阿巴巴</p>
            <HR
                    style="border: 1 dashed #987cb9; margin-bottom: 35px"
                    width="80%"
                    color="#987cb9"
                    SIZE="1"
            />
        </v-col>
        <p
          style="
            margin-left: 39%;
            padding-bottom: 35px;
            font-size: 15px;
            font-weight: 30;
          "
        >
          由啥也不会协会技术提供
        </p>
      </v-card>
    </v-col>
  </v-app>
</template>

<script>
export default {
  name: "result",
  data: () => ({
    grade:0,
  }),
  methods: {},
  created() {
    if(this.$route.query.code==400){
      this.grade=this.$route.query.grade;
    }
  }
};
</script>

<style scoped>
</style>
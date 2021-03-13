<template>
    <v-app style="background-image: linear-gradient(#6495ed, #f8f8ff)">
        <v-col cols="8" offset="2">
            <v-container style="margin-top: 100px">
            <v-card>
                <v-row justify="center" align="center">
                        <h1
                                style="
            color: #EE6363;
            background-color: black;
            text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px,
              rgba(255, 255, 255, 0.2) 1px 3px 3px;
            -webkit-background-clip: text;
            margin-top: 60px;
          "
                        >
                            问卷{{$route.query.id}}
                        </h1>
                </v-row>

                <v-row justify="center" align="start">
                    <v-col cols="10">
                        <p>下面每一个问题，请针对自己实际情况做出选择。</p>
                        <hr color=#987cb9 size="1"  width="100%"/>
                        <v-container v-for="(item,index) in list" :key="index">
                            <h2><span class="red--text">*</span>{{item.quesTitle}}</h2>
<!--                            <b style="font-size:23px;white-space:normal;"></b>-->
                            <v-radio-group
                                    col
                            >
                                <v-radio
                                        :label="item.optionA"
                                        @click="fact(item.quesId,'A')"
                                ></v-radio>
                                <v-spacer></v-spacer>
                                <v-radio
                                        :label="item.optionB"
                                        @click="fact(item.quesId,'B')"
                                ></v-radio>
                                <v-spacer></v-spacer>
                                <v-radio
                                        :label="item.optionC"
                                        @click="fact(item.quesId,'C')"
                                ></v-radio>
                                <v-spacer></v-spacer>
                                <v-radio
                                        :label="item.optionD"
                                        @click="fact(item.quesId,'D')"
                                ></v-radio>
                                <v-spacer></v-spacer>
                            </v-radio-group>

                        </v-container>
                        <v-btn
                                @click="submit()"
                                color="#0099CC"
                                dark
                                style="margin-left: 43%;margin-top: 30px;margin-bottom: 30px"

                        >
                            提交答卷

                        </v-btn>
                        <hr color=#987cb9 size=1  style="margin-bottom: 35px;" width="100%">
                    </v-col>
                </v-row>


                <p style="margin-left: 40%;padding-bottom: 35px;font-size: 15px;font-weight:30;">由啥也不会协会技术提供</p>
            </v-card>
            </v-container>
        </v-col>
        <v-progress-linear bottom color="pink" height="30px" style="margin-top: 10%;position:fixed" :value="progress">
            <span style="color:black">{{progress}}</span>
        </v-progress-linear>
    </v-app>
</template>

<script>
    import axios from "axios";
    import base_url from "../config";

    export default {
        name: "surveymodel",
        data: () => ({
            id: null,
            interval: {},
            value: 0,
            listLength: 0,
            lengthRight: true,
            alert_Submit_Defeat: false,
            progress: 0,
            nowProgress: 0,
            list: [
                {
                    "quesId": 2001,
                    "quesTitle": "你常感到与周围人的关系和谐吗?",
                    "optionA": "从不",
                    "optionB": "很少",
                    "optionC": "有时",
                    "optionD": "一直"
                },
                {
                    "quesId": 2002,
                    "quesTitle": "你常感到缺少伙伴吗?",
                    "optionA": "从不",
                    "optionB": "很少",
                    "optionC": "有时",
                    "optionD": "一直"
                },
                {
                    "quesId": 2003,
                    "quesTitle": "你常感到没人可以信赖吗？",
                    "optionA": "从不",
                    "optionB": "很少",
                    "optionC": "有时",
                    "optionD": "一直"
                },
                {
                    "quesId": 2004,
                    "quesTitle": "你常感到寂寞吗？",
                    "optionA": "从不",
                    "optionB": "很少",
                    "optionC": "有时",
                    "optionD": "一直"
                }
            ],
        }),
        created() {
            this.id = this.$route.params.id;
            const url = `${base_url}/uqes/list/${this.id}`;
            axios.get(url)
                .then(response => {
                    this.list = response.data.list;
                }).catch(error => {
                console.log("请求失败" + error);
            });
        },
        methods: {
            fact(id, index) {
                this.nowProgress++;
                this.progress = 100/this.list.length * this.nowProgress;
                console.log(this.progress);
                console.log(this.nowProgress);
                console.log(this.list.length);
                for (let i = 0; i < this.list.length; i++) {
                    if (id == this.list[i].quesId) {
                        this.list[i].optionSelect = index;
                        this.list[i].juage = true;
                        break;
                    }
                }
            },
            submit() {
                this.alert_Submit_Defeat = false;
                for (let i = 0; i < this.list.length; i++) {
                    if (!this.list[i].hasOwnProperty("juage")) {
                        this.alert_Submit_Defeat = true;
                        break;
                    }
                }
                if (!this.alert_Submit_Defeat) {
                    console.log("success");

                    const url = `${base_url}/score/grade/${this.id}`;
                    axios.post(url, {
                        data: {
                            "list": this.list,
                        }
                    }).then(response => {
                        switch (response.code) {
                            case 400:
                                this.$route.push(
                                    {
                                        path: '/result',
                                        query: {
                                            grade: response.data.grade
                                        }
                                    });
                                break;
                        }
                    }).catch(error =>
                    {
                        // 异常处理
                        console.log("提交评分错误" + error );
                    });

                    // this.$route.push('result');
                } else {
                    console.log("defeat");
                }
            },
        },
    };
</script>
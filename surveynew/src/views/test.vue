<template>
    <v-app>
        <v-btn @click="add('B')"></v-btn>
    </v-app>
</template>

<script>
    export default {
        name: "test",
        data: () => ({
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
            console.log(this.list.length);
            for (let i=0;i<4;i++){
                console.log(i);
            }
        },
        methods: {
            add(index) {
                this.list[1].optionSelect = index;
                console.log(this.list[0]);
                console.log(this.list[1]);
            }
        }
    }
</script>

<style scoped>

</style>
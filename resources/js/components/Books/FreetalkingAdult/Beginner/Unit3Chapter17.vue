<template>
    <div :style="{fontSize: fontSize + 'px'}">

        <v-container fluid ma-0 pa-0>

            <v-layout column>
    <div style="padding : 16px;">

                    <h3 style="padding-top: 7px;
                               margin-left: -18px;
                               margin-right: -18px;
                               padding-left: 10px;
                               padding-bottom: 10px;
                               padding-top: 15px;
                               margin-top: 40px;
                               background-color: #a7d7c5;">Conversation Samples <br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span></h3>
                    <div style="padding : 16px;"> 
                        
                    <table style = "border-collapse: collapse;">

                       <tr v-for="dialog in dialogs" :key="dialog">
                         <td class = "uppertable" ><b>{{dialog.name}}</b></td>
                         <td class = "lowertable" >{{dialog.speech}}</td>
                       </tr>

                    </table>


                    </div>


                    <h3
                        style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">
                        You're on the Limelight!</h3>
                    <div style="padding : 16px;">


                        <p>Answer the following questions.
                        </p>

                        <ol style="margin: 12px;">
                            <li>What is your favorite animal? Why?
                            </li>

                            <li>What is the most beautiful animal you have seen? Can you describe it?
                            </li>

                            <li>Are there endangered animals in your country?
                            </li>

                            <li>Do you have a pet? If yes, why did you get one? If no, do you plan to get one?
                            </li>

                            <li>How can animals help humans?
                            </li>

                            <li>Do you know other endangered species?
                            </li>

                            <li>Why do you think some animals are in danger?
                            </li>

                            <li>What is the effect to the humans if a species ceased to exist?
                            </li>

                            <li>What can we do to save them?
                            </li>

                            <li>Is it okay to kill animals to make bags out of their skins? Why or why not?
                            </li>

                            <li>Should animals be kept in the zoos? Why or why not?
                            </li>

                        </ol>

                    </div>

                    <h3
                        style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">
                        Translation</h3>
                    <div style="padding : 16px;">

                    <table style = "border-collapse: collapse;">

                       <tr v-for="translation in translations" :key="translation">
                       <td class = "uppertable" ><b>{{translation.name}}</b></td>
                       <td class = "lowertable" >{{translation.speech}}</td>
                       </tr>

                    </table>

                    </div>









                </div>










            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {

        props: ['fontSize'],

        data() {

            return {

                dialogs:[
        {
          name:'F :',
          speech:'What is your favorite day?'
        },
        {
          name:'M :',
          speech:'Well aside from my birthday, our family has a big celebration on the fourth Thursday of November.'
        },
        {
          name:'F :',
          speech:'Aha! That is Thanksgiving Day, right?'
        },
        {
          name:'M :',
          speech:'Exactly! How about you?'
        },
        {
          name:'F :',
          speech:'I was born in 1995, on October 31st. Every year, we have two occasions to celebrate, my birthday and the Halloween.'
        },
        {
          name:'M :',
          speech:"That is interesting! Isn't it weird to be born on the Halloween?"
        },
        {
          name:'F :',
          speech:'Not at all! But if I can choose my birthday, I would like to be born on December 25th.'
        },
        {
          name:'M :',
          speech:"That's Christmas! Why would you want that?"
        },
        {
          name:'F :',
          speech:"So that I can get two gifts in one day?"
        },
                ],
                translations:[
        {
          name:'F :',
          speech:'네가 가장 좋아하는 날을 뭐야?'
        },
        {
          name:'M :',
          speech:'음, 내 생일과는 별도로, 우리 가족은 11월 넷째 주 목요일에 큰 축하 행사를 해.'
        },
        {
          name:'F :',
          speech:'아하! 그거 추수감사절 맞지?'
        },
        {
          name:'M :',
          speech:'바로 그거야! 너는 어때?'
        },
        {
          name:'F :',
          speech:'나는 1995년 10월 31일에 태어났어. 매년, 우리는 나의 생일과 할로윈, 축하할 2개의 특별한 일이 있어.'
        },
        {
          name:'M :',
          speech:"흥미롭군! 할로윈데이에 태어난다는 게 이상하지 않아?"
        },
        {
          name:'F :',
          speech:'전혀! 하지만 만약 내가 내 생일을 선택할 수 있다면, 나는 12월 25일에 태어났으면 좋겠어.'
        },
        {
          name:'M :',
          speech:"그게 바로 크리스마스야! 왜 그런걸 원해?"
        },
        {
          name:'F :',
          speech:"하루에 두 개의 선물을 받을 수 있도록?"
        },
                ]


            }

        },


        beforeMount() {


        },

        methods: {


        },

        watch: {

            fontSize(current, old) {

                console.log(current, 'current')
                console.log(old, 'previous')


            }
        }
    }

</script>

<style lang="css">
    p {

        margin-top: 10px;
    }

    h3 {
        padding-top: 7px;

    }



    body {

        font-size: 16px;
    }

</style>

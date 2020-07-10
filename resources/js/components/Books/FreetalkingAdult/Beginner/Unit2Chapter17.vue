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
                              background-color: #a7d7c5;">Tips</h3>
                              <div style="padding : 16px;">


                        <p>Prepositions of Time
                        </p>

                        <li style="list-style-type: none;">"On", “In” and "At” are called prepositions. In indicating
                            time, they have very specific functions that should be taken into consideration carefully.
                        </li>










                        <v-container>
                            <v-layout wrap align-content-center>

                                <v-flex xs6 lg4>

                                    <v-card flat>

                                        <v-card-text>
                                            ON= Days and Dates
                                        </v-card-text>

                                        <v-card-text>
                                            On December 25
                                        </v-card-text>

                                        <v-card-text>
                                            On Monday
                                        </v-card-text>

                                        <v-card-text>
                                            On your birthday
                                        </v-card-text>

                                        <v-card-text>
                                            On your birthday
                                        </v-card-text>

                                    </v-card>
                                </v-flex>



                                <v-flex xs6 lg4>
                                    <v-card flat>

                                        <v-card-text>
                                            AT= specific time
                                        </v-card-text>

                                        <v-card-text>
                                            At 3:00 in the morning
                                        </v-card-text>

                                        <v-card-text>
                                            At 3:00 in the morning
                                        </v-card-text>

                                        <v-card-text>
                                            At 3:00 in the morning
                                        </v-card-text>

                                        <v-card-text>
                                            At sunrise
                                        </v-card-text>

                                    </v-card>
                                </v-flex>

                                <v-flex xs6 lg4>
                                    <v-card flat>

                                        <v-card-text>
                                            IN= months, years, centuries and seasons
                                        </v-card-text>

                                        <v-card-text>
                                            In 2012
                                        </v-card-text>

                                        <v-card-text>
                                            In the 17th century
                                        </v-card-text>

                                        <v-card-text>
                                            In the winter
                                        </v-card-text>

                                        <v-card-text>
                                            In the 1990s
                                        </v-card-text>


                                    </v-card>
                                </v-flex>

                            </v-layout>
                        </v-container>



                    </div>




                    <h3
                        style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">
                        Enhance!</h3>

                    <div style="padding : 16px;">


                        <p>
                            Complete the following sentences. Use the appropriate prepositions of time.
                        </p>

                        <ol style="margin: 12px;">

                            <li>I would like to surprise my friend ________ her birthday.
                            </li>

                            <li>____ the early 21st century, high technology began to be used more commonly.
                            </li>

                            <li>We should meet tomorrow ____ dinnertime.
                            </li>

                            <li>Please submit your homework _____ Friday.
                            </li>

                            <li>We are planning to see the Rafflesia ______ the summer.
                            </li>

                            <li>He called me _____ 4:00 in the morning!
                            </li>

                            <li>We shared dinner in the seashore ______ sunset.
                            </li>

                            <li>He was born _____ May 20, 1991.
                            </li>

                            <li>You should be there in the meeting ____ 2:00 pm.
                            </li>

                            <li>Do you think flying cars will be invented ______ 2050?
                            </li>

                        </ol>

                        <p>
                            Pretend that you are a secretary reporting to your boss her schedule for the day. Make
                            complete sentences using the information given below.
                        </p>

                        <v-container>
                            <v-layout wrap align-content-center>

                                <v-flex xs6 lg4>

                                    <v-card color="rgb(255,255,224)" flat>

                                        <v-card-text>
                                            *8:00 am - meeting with Marketing Managers
                                        </v-card-text>

                                        <v-card-text>
                                            *9:30 am - factory check
                                        </v-card-text>

                                        <v-card-text>
                                            *Noon - lunch meeting with American investors
                                        </v-card-text>

                                        <v-card-text>
                                            *4:00 pm - checking of proposals
                                        </v-card-text>

                                    </v-card>
                                </v-flex>

                            </v-layout>
                        </v-container>


                        <p>
                            Tip: To make your role-play more realistic, start off with the proper greeting and proceed:
                        </p>

                        <li style="list-style-type: none;">Good morning Ma'am.
                        </li>

                        <li style="list-style-type: none;">This is your schedule. You will have a meeting with...
                        </li>


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

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

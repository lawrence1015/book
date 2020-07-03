<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://image.freepik.com/free-photo/elegant-director_1098-13540.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Making decisions 1 (should, have to)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Interviewer: People often say that some nationalities are more polite than others.
                        Do you think that’s true? And do you think you have to be more or less polite when you work with people from different cultures?</li>
                    <li style="list-style-type: none;">Sandra: You don’t have to be more or less polite. I think it’s more a question of how direct people are.
                        You should always be polite. It’s just that, in some cultures, it’s OK to be direct, and in other, um… it’s not.
                        For example, in Germany, people ask direct questions and… they like direct answers.</li>
                    <li style="list-style-type: none;">Interviewer: But in the UK, generally, people are less direct, aren’t they?</li>
                    <li style="list-style-type: none;">Sandra: Well, they’re not afraid to say they disagree or… or to criticize suggestions. You don’t have to say you agree all the time.
                        But… you know, people say things like, ‘I’m not sure I agree’, or… ‘Maybe it would be better to do it another way’.
                        I’ve always found, in different cultures, the best way to disagree or… or criticize ideas is to make it clear you’re criticizing the suggestion – you shouldn’t criticize the person.</li>
                    <li style="list-style-type: none;">Interviewer: In Japan, it’s very important not to criticize people, isn’t it?</li>
                    <li style="list-style-type: none;">Sandra: Yes, You should never criticize anyone directly. It’s… for the Japanese, it’s very impolite. That’s why, often, in companies in Japan, people have to make decisions in groups. Everyone
                        has to agree.</li>
                    <li style="list-style-type: none;">Interviewer: So what’s your general advice? Do you think people should change the way they communicate in different cultures or… or should you just be yourself?</li>
                    <li style="list-style-type: none;">Sandra: I think you should always be yourself, um… but… I think, to be successful, you really need to change how you say things.</li>
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Underline the correct words so that the sentences are true.
                    </p>


                    <ol style="margin: 12px;">
                        <li>
                            In Germany, you should/shouldn’t be very direct.
                        </li>
                        <li>
                            In the UK, you have to/don’t have to agree all the time.
                        </li>
                        <li>
                            In Japan, you should/shouldn’t criticize people directly.
                        </li>
                        <li>
                            In Japanese companies, they often have to/don’t have to make decisions in groups.
                        </li>
                    </ol>

                    <p>
                        Read the comments about decision making. Which do you agree and disagree with? Say why.
                    </p>

                    <ol style="margin: 12px;">
                        <li>
                            'I think it's best to tell people what you really think of their suggestions, and to be direct. '
                        </li>
                        <li>
                            'If you don't agree with someone's idea, it's important not to criticise their suggestion.'
                        </li>
                        <li>
                            'In companies, it's best to make group decisions. It's important that all the team agress.'
                        </li>
                        <li>
                            'In the end, one person has to make a decision, even if the others in the team don't agree.'
                        </li>
                    </ol>

                </div>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Self Study</h3>
                <div style="padding : 16px;">


                    <p>
                        Notes
                    </p>

                    <p>

                        <v-container grid-list-md text-xs-left>
                            <v-layout row wrap>


                                <v-flex xs12>
                                    <v-card light color="#2E97F2">
                                        <v-card-text class="px-10">
                                            <p>
                                                Should, have to<br />
                                                I think we <b>should</b> develop this product.<br />
                                                In my opinion, we <b>shouldn’t</b> make a decision yet.<br />
                                                We <b>have to</b> make a decision soon.<br />
                                                We <b>don’t have to</b> decide now.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>

                    </p>

                </div>


            </div>


        </v-layout>
    </v-container>
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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #1A6DD9 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #1A6DD9;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}


</style>

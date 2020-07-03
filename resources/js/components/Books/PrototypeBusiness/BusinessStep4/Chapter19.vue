<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGxqQurGs/5/screen_2x/canva-woman-in-black-suit-jacket-facing-man-in-blue-denim-dress-shirt-same-standing-MADGxqQurGs.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Passing on information 2 (Reported speech)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Victoria:  So I’ve looked at the three quotes, from all three hotels. And, obviously, we’re visited all three as well. Um… and I think the best place is the Darley.</li>
                    <li style="list-style-type: none;">George:  Yeah. I agree. The trouble is, it’s the most expensive.</li>
                    <li style="list-style-type: none;">Victoria:  Yeah. Their price is, what, ten percent higher than the other two.</li>
                    <li style="list-style-type: none;">George:  Hmm. It is their first offer, though. I haven’t negotiated with them yet.</li>
                    <li style="list-style-type: none;">Victoria:  No. Could you try to get a better price from them?</li>
                    <li style="list-style-type: none;">George:  I can try, yeah. I’ll call the manager in the morning. Um… what’s her name… Heidi Wells.</li>
                    <li style="list-style-type: none;">Victoria:  Tell her you’ve spoken to your boss, and, er… tell her I said they can have the contract if they can give us a ten percent discount.</li>
                    <li style="list-style-type: none;">George:  And why don’t I show her the offers from the other hotels? I can go and see her, and take the quotes with me. That’s probably better than phoning.</li>
                    <li style="list-style-type: none;">Victoria:  Yeah, OK.</li>
                    <li style="list-style-type: none;">George:  And what if she says they can’t give us ten percent, but they can give… I don’t know, five percent?</li>
                    <li style="list-style-type: none;">Victoria:  Well, do your best to get ten percent. If she offers you… five percent, or whatever,
                                                       then… tell her you’ll have to speak to me again. Tell her you can accept ten percent immediately, but, if not, you’ll have to get back to me.</li>
                    <li style="list-style-type: none;">George:  OK, fine. I’ll phone her now and see if I can arrange a meeting tomorrow.</li>
                    <li style="list-style-type: none;">Victoria:  Right. I’ll give John Gates a call and give him an update – tell him what our strategy is!</li>
                    <li style="list-style-type: none;">George:  So I’ll give you a call, um… after I’ve met Heidi Wells, tomorrow.</li>
                    <li style="list-style-type: none;">Victoria:  Right, OK. Well good luck!</li>
                    <li style="list-style-type: none;">George:  Thanks. Bye.</li>
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Answer the questions.
                    </p>

                    <ol style="margin: 12px;">
                        <li>
                            What does Victoria say about the Darley Hotel?
                        </li>
                        <li>
                            What does she think about the hotel’s quote?
                        </li>

                        <li>
                            What’s George going to do tomorrow?
                        </li>
                        <li>
                            What’s Victoria going to do now?
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
                                                Useful language<br />
                                                She promised to finish the report this week.<br />
                                                He agreed to increase the budget by 10%.<br />
                                                We’ve decided not to start work yet.<br />
                                                He said he was happy to attend and was keen to give a talk.<br />
                                                He doesn’t like flying, so he was reluctant to go by plane.
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

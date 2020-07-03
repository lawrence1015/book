<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/k1aT4/MADyQ4k1aT4/1/s2/canva-group-of-person-sitting-indoors-MADyQ4k1aT4.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Attending meetings (Time clauses)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Victoria: OK. Shall we make a start? … er, just to say, John Gates can’t make it. He sends his apologies. He’s had to go to an urgent meeting with a customer.
                        John’s asked me to chair the meeting… so I’m in the hot seat! OK, first, has everyone got an agenda?
                        John told me copies were circulated on Monday.
                    </li>
                    <li style="list-style-type: none;">George: I got the agenda, but I didn’t get a copy of the minutes from the meeting last week.</li>
                    <li style="list-style-type: none;">Victoria: The meeting last week?</li>
                    <li style="list-style-type: none;">George: John told me you all met last week, to talk about the conference. I didn’t attend. I wasn’t here last week. So I don’t know what…</li>
                    <li style="list-style-type: none;">Victoria: Oh, that. No, we didn’t hold a meeting. We didn’t take minutes or anything, it was just… some of us had a talk. during a coffee break…</li>
                    <li style="list-style-type: none;">George: Oh, OK.</li>
                    <li style="list-style-type: none;">Victoria: Don’t worry, you didn’t miss anything. So, we’ve called this meeting to talk about the sales conference next January.
                        We need to look at the program… to plan what we’re going to do.. during the two days. So let’s look at the first item on the agenda, then: the main theme for the conference.
                        As you know, each year we have a theme…</li>
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
                            Why can’t John Gates come to the meeting?
                        </li>
                        <li>
                            What happened last week?
                        </li>
                        <li>
                            What’s the aim of this meeting?
                        </li>
                    </ol>

                    <p>
                        Talk about meetings.
                    </p>

                    <ol style="margin: 12px;">
                        <li>
                            How often do you go to meetings?
                        </li>
                        <li>
                            What sort of meetings do you attend?
                        </li>
                        <li>
                            How much time do you spend in meetings?
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
                                                Time clauses<br />
                                                I’<b>ll call</b> you when I <b>get</b> to the station.<br />
                                                I’<b>ll phone</b> you as soon as I <b>arrive.</b><br />
                                                We <b>won’t start</b> before you <b>arrive.</b><br />
                                                We’<b>ll wait</b> until everyone <b>is</b> here.
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

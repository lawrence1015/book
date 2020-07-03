<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGvz4sJD4/6/screen_2x/canva-group-of-people-sitting-in-front-of-table-MADGvz4sJD4.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Making decisions 2 (should, have to)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    The directors of Altora, a drinks company, are considering opening a new factory. There are six extracts from the meeting.
                </p>

                <ol style="margin: 12px;">
                    <li>
                        One suggestion is, we could close the old plant and move everything to a new site. I think we should consider that option. It’s a possibility.
                    </li>
                    <li>
                        There would be a lot of benefits if we had just one plant. It would be better, um… it would be easier to manage supplies and deliveries. Energy costs would be another advantage.
                    </li>
                    <li>
                        We know how much we would save if we had a new production line. We’ve all read the report and seen the figures for that. And from the forecasts we know more or less…
                    </li>
                    <li>
                        I think one large plant looks like a good option. That’s my first impression.
                    </li>
                    <li>
                        OK, shall we sum up, then? I think we’ve made quite good progress. We’ve got quite a long list of ideas. I think we should just consider two or three proposals. So let’s look at the list…
                    </li>
                    <li>
                        A I don’t think it would be a good idea to spend so much. I’m worried about the economic situation. I think it’s too uncertain.<br />
                        B So what would you recommend?<br />
                        C Let’s just talk about disadvantages for the moment.<br />
                        B I just wouldn’t recommend such a big investment. We have to be careful.
                    </li>
                </ol>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Match each extract (1-6) to one of the ‘Six Thinking Hats’.
                    </p>

                    <v-container grid-list-md text-xs-center>
                        <v-layout wrap align-content-center>

                            <v-flex xs12 md4>
                                <v-card hover>

                                    <v-img src="images/sixthinkinghats.jpg" />

                                </v-card>
                            </v-flex>

                        </v-layout>
                    </v-container>

                    <p>
                        Free response:<br />
                        Talk about the 'Six Thing Hats'.<br />
                        Do you think the technique works?<br />
                        In your opinion, which hats are the easiest and most difficult to ‘wear’?<br />
                        Do you think the technique would work in your company?
                    </p>

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
                                                Let’s discuss this proposal.<br />
                                                This idea would give us several benefits.<br />
                                                I think we should consider other options.<br />
                                                I’m worried about the cost.<br />
                                                I wouldn’t recommend doing that. I’d recommend the other option.<br />
                                                I don’t think it’s a good idea to do that.
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

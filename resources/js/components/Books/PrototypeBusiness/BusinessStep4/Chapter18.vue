<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/IayKo/MAD35zIayKo/1/s2/canva-woman-in-white-crew-neck-t-shirt-using-silver-macbook-MAD35zIayKo.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Passing on information 1 (Reported speech)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">George: Hello.</li>
                    <li style="list-style-type: none;">Victoria: Hello George, it’s Victoria. How are you?</li>
                    <li style="list-style-type: none;">George: Not too bad.</li>
                    <li style="list-style-type: none;">Victoria: I’m just calling about the quotes, from the three hotels, for the conference. Have you got copies of all of them?</li>
                    <li style="list-style-type: none;">George: Um… yes. Yeah, they’re here on my, er, desk… somewhere.</li>
                    <li style="list-style-type: none;">Victoria: Could you email them to me?</li>
                    <li style="list-style-type: none;">George: Um… I can fax them. I’ve only got hard copies – I haven’t got the files in the computer, so, um…</li>
                    <li style="list-style-type: none;">Victoria: OK, fine.</li>
                    <li style="list-style-type: none;">George: I’ve got to go to a meeting in about a quarter of an hour, so… I’ll send them now.</li>
                    <li style="list-style-type: none;">Victoria: Yeah, OK. There’s no rush. This afternoon’s fine, if, um…</li>
                    <li style="list-style-type: none;">George: No, no, it’s no problem. I’ll send them now.</li>
                    <li style="list-style-type: none;">Victoria: OK, great. Then maybe we can discuss them later today?</li>
                    <li style="list-style-type: none;">George: Sure. I’ll be in the office all afternoon.</li>
                    <li style="list-style-type: none;">Victoria: OK. I’ll call you later this afternoon, then.</li>
                    <li style="list-style-type: none;">George: OK.</li>
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
                            What information does Victoria need?
                        </li>
                        <li>
                            Does George have the information?
                        </li>

                        <li>
                            Where’s George going next?
                        </li>
                        <li>
                            What’s he doing this afternoon?
                        </li>
                    </ol>

                    <p>
                        How often do you talk about discussions you had with other people? Think about:<br />
                        - taking and receiving telephone messages<br />
                        - telling colleagues what was discussed in meetings they didn't attend<br />
                        - giving feedback about discussions with customers or suppliers
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
                                                Report speech<br />
                                                I’<b>m</b>very busy. > He said he <b>was</b> very busy.<br />
                                                I <b>have</b> a copy. > He said he <b>had</b> a copy.<br />
                                                I <b>can</b> email it. > He said he <b>could</b> email it.<br />
                                                I’<b>ll</b> send it. > He said he <b>would</b> send it.
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

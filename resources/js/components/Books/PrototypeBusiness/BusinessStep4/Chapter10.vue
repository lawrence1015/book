<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGvx9A7cE/7/screen_2x/canva-file-arrangement-MADGvx9A7cE.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing ideas (Second conditional)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">A: OK, so our objective is to think of some new ideas. How could we make the product better?</li>
                    <li style="list-style-type: none;">What areas of the product could we improve? Any suggestions?</li>
                    <li style="list-style-type: none;">B: What about changing the packaging? We could change the material.</li>
                    <li style="list-style-type: none;">A: Yeah. Packaging material. OK.</li>
                    <li style="list-style-type: none;">C: How about changing the size?</li>
                    <li style="list-style-type: none;">A: Of the CD?</li>
                    <li style="list-style-type: none;">C: No, the pack. Why don’t we sell more CDs in a pack, for example?</li>
                    <li style="list-style-type: none;">A: OK. Yeah. So, bigger packs. They could be smaller, as well.</li>
                    <li style="list-style-type: none;">B: Why not sell big boxes – big storage boxes, with lots of CDs in them? Then you wouldn’t need packaging.</li>
                    <li style="list-style-type: none;">A: So that would be a new product. A storage box.</li>
                    <li style="list-style-type: none;">C: We could sell CDs with numbers printed on them – say from one to a hundred. Then you</li>
                    <li style="list-style-type: none;">wouldn’t need to write on the CD. You could make a note of what was on each CD number,</li>
                    <li style="list-style-type: none;">and then find it easily. So we could sell, say, packs of ten. So you would have one to ten, or
                        eleven to twenty, and so on.</li>
                    <li style="list-style-type: none;">B: That’s a good idea. We could use that idea with the storage box. So we could produce a big
                        plastic box with, say, a hundred blank CDs in it, with the CDs numbered one to a hundred.</li>
                    <li style="list-style-type: none;">A: Mmm, that’s a, that’s an interesting idea.</li>
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Complete the second conditional sentences. Use the correct forms of the verbs.
                    </p>


                    <ol style="margin: 12px;">
                        <li>
                            If CDs <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> didn't have <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> packaging, they <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> would be <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>
                            cheaper. (not have, be)
                        </li>
                        <li>
                            Our CDs <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> more if they <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> cheaper. (sell, be)
                        </li>
                        <li>
                            If we <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> the price, we <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> more CDs. (lower, sell)
                        </li>
                        <li>
                            I think we <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> more CDs if we <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u> them in bigger packs. (sell,sell)
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about creativity.<br />
                        How creative are you?<br />
                        How important is creativity for your work?<br />
                        Do you use your creative skills enough?
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
                                                Second conditional<br />
                                                <b>If</b> we <b>did</b> that, we’<b>d</b> have problems.(we’d = we would)<br />
                                                <b>If</b> we <b>used</b> plastic, we <b>could</b> make it lighter.
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

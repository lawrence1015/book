<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/aqj9o/MADyRPaqj9o/1/s2/canva-man-standing-in-front-of-airplane-MADyRPaqj9o.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing safety procedures (must)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Dennis: OK. Let’s make a list of dangers on the tarmac… and then we can make a list of safety precautions to help prevent accidents. So, first of all, what are the main hazards? Any suggestions?
                    </li>
                    <li style="list-style-type: none;">Woman: Planes, when they’re moving.</li>
                    <li style="list-style-type: none;">Dennis: OK…. Moving planes.</li>
                    <li style="list-style-type: none;">Man: Noise from engines… from the jets. You need to wear ear protection.</li>
                    <li style="list-style-type: none;">Dennis: Uhuh, OK. Noise… protection.</li>
                    <li style="list-style-type: none;">Woman: Other vehicles, moving around.</li>
                    <li style="list-style-type: none;">Dennis: OK, good. Moving vehicles. They are the biggest hazard on the tarmac. Not planes, but vehicles: buses, trucks, cars… What precautions can you take to help avoid accidents – to prevent
                        ground vehicles hitting people?</li>
                    <li style="list-style-type: none;">Woman: Er, everyone should wear a green jacket.</li>
                    <li style="list-style-type: none;">Dennis: OK. High visibility clothing. Essential. Does anyone know why moving vehicles are especially dangerous at airports?</li>
                    <li style="list-style-type: none;">Woman: Because they drive around quite fast?</li>
                    <li style="list-style-type: none;">Dennis: They often do, yeah. They’re not allowed to, though, The health and safety regulations say that every employee is responsible for the safety of others.
                        But there’s another reason why moving vehicles are particularly hazardous at airport. Any other ideas?</li>
                    <li style="list-style-type: none;">Man: Because you can’t hear them, because of all the noise… from jets and, um…</li>
                    <li style="list-style-type: none;">Dennis: Exactly. If you’re standing near a plane with its engines running, you can’t always hear vehicles coming.
                        Just now, someone said you need to wear ear protection. For some jobs - for example, if you have to stand in front of moving planes to guide the pilots,
                        then, yes, you need to protect your ears. But only some people need ear protection, some of the time.</li>
                    <li style="list-style-type: none;">Woman: So how do we know if we need ear protection or not? Are there standard procedures?</li>
                    <li style="list-style-type: none;">Dennis: Yes. We’ll look at those a bit later on…</li>
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <ol style="margin: 12px;">
                        <li>
                            What’s the biggest danger on the tarmac?
                        </li>
                        <li>
                            Why is the danger in question 1 worse at airport?
                        </li>
                        <li>
                            Which the problem with ear protection?
                        </li>
                        <li>
                            What’s the problem with ear protection?
                        </li>
                        <li>
                            What other words does Dennis use for danger and dangerous?
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about safety in your job, company or industry, or another industry you know about.<br />
                        What are the main dangers?<br />
                        What safety precautions must workers take and what procedures must they follow?
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
                                                Must<br />
                                                All pilots <b>must</b> have a license.<br />
                                                (= They have to have one.)<br />
                                                You <b>mustn’t</b> carry dangerous items on planes. (= You’re not allowed to.)
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

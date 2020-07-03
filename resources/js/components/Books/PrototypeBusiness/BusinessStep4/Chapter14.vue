<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="//live.staticflickr.com/7068/6823667554_009b3139e7_k.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Describing how things work (Prepositions: position and movement)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <b>430KM/H 'MAGLEV' AIRPORT SHUTTLE TAKES OFF IN SHANGHAI</b>
                </p>

                <p>
                    When you get on the train at Longyang Road Station in Shanghai, you know it won’t be long before take-off-and not just because you’re going direct to Pudong International Airport.
                    Thanks to the city’s new ‘Maglev’ train, you don’t have to wait to get on a plane before
                    you leave the ground-you take off before you come out of the station.
                    Maglev is short for ‘magnetic levitation’. The system was developed by the German firm Transrapid. The train is lifted off the track, to a height of about 1cm, by electromagnets.
                    It’s then pushed along the line by the same magnetic force, up to its maximum speed.
                    The advantage of ‘flying’ above the track is that there’s no need for wheels or other moving parts, which use a lot of energy. This means the train can travel extremely fast: up to 430km/h. If Maglev technology is economical to
                    run, however, it’s not cheap to build.
                    The cost of the 30km track across Shanghai was a huge $1.2 billion.
                    Will Maglev change the future of train travel? Clearly, costs need to come down before long-distance tracks are built.
                    But many believe the technology will take off because of its high speed potential. Travelling the full length of Germany or France, for example, would take just over two hours on a Maglev.
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">


                    <ol style="margin: 12px;">
                        <li>
                            Which two places are connected by the Maglev line?
                        </li>
                        <li>
                            What’s the main difference between Maglevs and normal trains?
                        </li>
                        <li>
                            What’s the best thing about Maglev technology?
                        </li>
                        <li>
                            What’s Maglev’s main disadvantage?
                        </li>
                    </ol>

                    <p>
                        Take it in turns to describe an object in the room for your partner to guess.<br />
                        A: It's about thirty centimeters wide. It's two and a half meters above the floor.<br />
                        B: Is it the clock?
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
                                                Prepositions: position and movement<br />
                                                The Maglev travels <b>above</b> the track.<br />
                                                The train is lifted <b>up</b> by magnetic force.<br />
                                                You get <b>off</b> the train at the airport.
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

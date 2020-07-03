<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/lAeLs/MAD7IylAeLs/1/s2/canva-young-man-using-smartphone-and-watching-tv-in-living-room-MAD7IylAeLs.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing what’s on TV 1 (Television programs)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Valerie: So, is your hotel OK? Did you sleep well?</li>
                    <li style="list-style-type: none;">Naomi: Yes, fine thanks. I watched TV for a while, then had an early night. I watched a bit of that… quiz show… Who Wants To Be A Millionaire? – the French version.</li>
                    <li style="list-style-type: none;">Valerie: Ah, really?</li>
                    <li style="list-style-type: none;">Naomi: It’s exactly the same as in the UK. The studio, the music…</li>
                    <li style="list-style-type: none;">Valerie: Yes, I think a lot of those kinds of shows are the same.</li>
                    <li style="list-style-type: none;">Naomi: Do you have The Weakest Link? It’s a quiz show, and the presenter’s really horrible to the contests.</li>
                    <li style="list-style-type: none;">Valerie: Oh, yes, Yes, it’s the same in France. I’ve seen the English version, as well, on satellite TV.</li>
                    <li style="list-style-type: none;">Naomi: And do you have programs like Big Brother? You know, with people living in a house, and there are cameras filming all the time.</li>
                    <li style="list-style-type: none;">Valerie: Yes, we had a similar thing a few years ago. Do you have that programs, um… in France it’s called Star Academy… er, with people who want to be pop stars, and, er, people vote, um…</li>
                    <li style="list-style-type: none;">Naomi: Yeah. It’s called Fame Academy in England. There’ve been so many things like that on television in the last few years. Reality TV.</li>
                    <li style="list-style-type: none;">Valerie: Reality TV. Yeah. It’s been the same in France. At home, I have satellite TV, and I get English programs…</li>
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
                            Why do they start talking about TV programs?
                        </li>
                        <li>
                            Which programs did Naomi watch last night?
                        </li>
                        <li>
                            Which two types of program do they talk about?
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about television programs.<br />
                        What sort of TV programs are popular in your country?<br />
                        What types of programs do they like most?
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
                                                useful language<br />
                                                Did you watch that quiz show last night?<br />
                                                Do you have… in your country? It’s a reality TV show.<br />
                                                Have you ever seen that programme about buying property abroad?<br />
                                                I watched an interesting documentary about China last night.
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

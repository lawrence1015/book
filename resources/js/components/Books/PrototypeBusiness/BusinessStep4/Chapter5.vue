<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="//live.staticflickr.com/33/103466903_ca2a2980ac_h.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing what’s on TV 2 (Television programs)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Valerie: At home, I have satellite TV, and I get English programs on BBC Prime. They show things like quiz shows, documentaries, comedy programs. I find comedies quite difficult to understand.
                    </li>
                    <li style="list-style-type: none;">Naomi: Yeah, I bet.</li>
                    <li style="list-style-type: none;">Valerie: There’s talk show, as well, where they interview famous people, I think the presenter’s very well known in Britain. His name’s, um… oh…</li>
                    <li style="list-style-type: none;">Naomi: Michael Parkinson?</li>
                    <li style="list-style-type: none;">Valerie: Yes! They also show some good children’s programs. My little boy watches Teletubbies.</li>
                    <li style="list-style-type: none;">Naomi: Oh yeah.</li>
                    <li style="list-style-type: none;">Valerie: There’s another thing I sometimes watch. What’s the name for the type of programs…. It’s about, not real people, they’re actors, but about… just everyday life in a street or, um…</li>
                    <li style="list-style-type: none;">Naomi: A soap opera. Or a soap.</li>
                    <li style="list-style-type: none;">Valerie: That’s it! There’s a soap about the people who live in a… a square in London. I… I can’t remember…</li>
                    <li style="list-style-type: none;">Naomi: Not EastEnders?</li>
                    <li style="list-style-type: none;">Valerie: EastEnders. That’s it. What’s so funny?</li>
                    <li style="list-style-type: none;">Naomi: Valerie, I can’t believe you watch EastEnders… in Paris!</li>
                    <li style="list-style-type: none;">Valerie: Actually, I’d like to watch more films in English. On French TV, when they show American films, the voices are in French. How do you say that? They’re…</li>
                    <li style="list-style-type: none;">Naomi: Dubbed.</li>
                    <li style="list-style-type: none;">Valerie: Dubbed?</li>
                    <li style="list-style-type: none;">Naomi: Yeah.</li>
                    <li style="list-style-type: none;">Valerie: They’re nearly always dubbed in French. On some channels, they show the original film with er… you know, text at the bottom of the screen with… with the translation.</li>
                    <li style="list-style-type: none;">Naomi: With subtitles?</li>
                    <li style="list-style-type: none;">Valerie: Subtitles, yeah. But I don’t like that because you read but you don’t really listen to…</li>
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
                            What sort of channel is BBC Prime?
                        </li>
                        <li>
                            What programs does Valerie find hard to understand?
                        </li>
                        <li>
                            Why does Naomi laugh?
                        </li>
                        <li>
                            What are two ways of showing films in another language?
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        In your opinion, what are the worst programs on TV? Why don’t you like them?<br />
                        Do you think watching TV is good or bad for children? Why?
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
                                                What channel is it on?<br />
                                                Have you got satellite or cable TV?<br />
                                                Do you get the …. Channel?<br />
                                                Does the film have subtitles or is it dubbed?
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

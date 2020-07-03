<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://image.freepik.com/free-photo/portrait-interesting-reddish-man-mixing-coffee_158595-3761.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Describing a business concept 2 (Passive: present simple, past simple)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Amy Venn is talking to a junior colleague about product placement.</li>
                    <li style="list-style-type: none;">Colleague: So, the products are seen in films and TV programs. They’re just… seen on a table or…</li>
                    <li style="list-style-type: none;">Amy: That’s right. Or in our case, with clothes, they’re worn by an actor, um…</li>
                    <li style="list-style-type: none;">Colleague: And you see the logo.</li>
                    <li style="list-style-type: none;">Amy: Sometimes, yeah. It depends. You can’t always… control what happens.
                        Often, products are given to the film company for free. So you know an actor is going to… to wear your jacket, for example,
                        but… you don’t know if you’ll actually see the logo.</li>
                    <li style="list-style-type: none;">Colleague: So you can’t say to the film company, we want to… see this part of the jacket, or…</li>
                    <li style="list-style-type: none;">Amy: Well, you can, but then, usually, you have to pay. Sometimes, the film company is paid by the advertiser. And then you have more control.
                        I mean… sometimes, the name of a product is said by an actor.
                        But that’s… in a film – you’re talking big money for that sort of thing.</li>
                    <li style="list-style-type: none;">Colleague: Yeah, I bet… And when did companies start doing this? I guess it’s done more now than in the past.</li>
                    <li style="list-style-type: none;">Amy: I think the first placement were used in films in the 1960s, for cigarettes. But the big business really started in the 80s. I think the best placement,
                        though, was, um… did you see Forrest Gump? The Apple placement was done very well in that.</li>
                    <li style="list-style-type: none;">Colleague: For Apple computers?</li>
                    <li style="list-style-type: none;">Amy: Yeah. There’s a scene where Forrest Gump gets a letter from Apple…</li>
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
                            Do product placements always show the company logo?
                        </li>
                        <li>
                            What product placement are very expensive?
                        </li>
                        <li>
                            What did the first product placements advertise?
                        </li>
                        <li>
                            Which company had a product placement in the film Forrest Gump?
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Do you think product placement can be more effective than advertising? Say way.<br />
                        In your opinion, what’s the difference between good and bad product placement?
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
                                                In return for a payment, the product is shown in the film.<br />
                                                In big films, the logos on products are seen by millions of viewers.<br />
                                                Product placement was used for the first time in the 1960s.
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

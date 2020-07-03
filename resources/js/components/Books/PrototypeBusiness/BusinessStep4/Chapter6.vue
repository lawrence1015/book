<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGxta3pf4/4/screen_2x/canva-brown-haired-female-reading-magazine-MADGxta3pf4.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Describing a business concept 1 (Passive: present simple, past simple)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Amy Venn, the new marketing manager of Sway, a clothing company.</li>
                    <li style="list-style-type: none;">She’s making a presentation to the directors.</li>
                    <li style="list-style-type: none;">So, first, let’s look at our present advertising strategy. How are we promoting the brand at the moment? As you know, we</li>
                    <li style="list-style-type: none;">advertise in the press – most of our press ads are in magazine read by the eighteen to twenty-four age group. We also use</li>
                    <li style="list-style-type: none;">adverts on billboards. We occasionally use TV commercials. And, of course, we market the brand with sponsorship in</li>
                    <li style="list-style-type: none;">sports – we sponsor basketball, snowboarding and surfing.</li>
                    <li style="list-style-type: none;">At the moment, our spending on advertising is high as a percentage of sales. The reason for that is the cost of TV</li>
                    <li style="list-style-type: none;">commercials. But the problem is, to make TV commercials work, you need a lot of them. A lot more that we have at</li>
                    <li style="list-style-type: none;">present. Now, obviously we don’t have the budget for that. So, in my opinion, TV commercials are not the right strategy</li>
                    <li style="list-style-type: none;">for Sway.</li>
                </p>


                <p>
                    But that doesn’t mean we can’t advertise on TV. We can. The way to do it more cheaply is to use product placement. The way product placement works is…
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
                            Which age group are Sway targeting with their press advertising?
                        </li>
                        <li>
                            Which sports does Amy mention when she talks about sponsorship?
                        </li>
                        <li>
                            Why does Sway spend so much on advertising?
                        </li>
                        <li>
                            How does Amy suggest cutting costs?
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about advertising.<br />
                        What are your favorite adverts?<br />
                        In your opinion, what makes a good advert?
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
                                                Passive: present simple, past simple<br />
                                                Active: Apple <b>uses</b> product placement.<br />
                                                Passive: Product placement <b>is used</b> by Apple.<br />
                                                Active: Companies <b>show</b> products in films.<br />
                                                Passive: Products <b>are shown</b> in films.<br />
                                                Active: Millions of viewers <b>saw</b> the film.<br />
                                                Passive: The film <b>was seen</b> by millions of viewers.
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

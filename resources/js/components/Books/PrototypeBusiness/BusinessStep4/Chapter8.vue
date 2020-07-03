<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/GzPw8/MAD1uDGzPw8/1/s2/canva-person-in-white-long-sleeve-shirt-holding-pen-MAD1uDGzPw8.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing strategies (Adverbs of manner)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Tony Ellston is talking to Jane Rye, an investment banker. She’s advising him on business strategy.</li>
                    <li style="list-style-type: none;">Tony: The business has done well over the last three years. And I think now’s the right time to
                        expand – to open a new office, hire some good people… hire a manager to help me, and
                        … you know, become a bigger organization. So I need to raise finance, and to do that, I’d
                        like to try and find some people who want to buy shares in the company.</li>
                    <li style="list-style-type: none;">Jane: Right. So you’re not planning to borrow the money?</li>
                    <li style="list-style-type: none;">Tony: No. And to expand quickly. I need more than just money. I need your advice on how to
                        manage the expansion.</li>
                    <li style="list-style-type: none;">Jane: OK. Well, you’re certainly right to recruit a manager for the new office. I’m sure you know
                        what it’s like to work hard, seven days a week… Obviously, you’re an entrepreneur, you set
                        up the company. But as the organization grows, each year, your job changes gradually.
                        If you open a new office, obviously that’s a big change, so your job needs to change significantly.</li>
                    <li style="list-style-type: none;">Tony: Sure.</li>
                    <li style="list-style-type: none;">Jane: Have you thought about your future with the company?</li>
                    <li style="list-style-type: none;">Tony: … You mean, do I want to sell the whole business?</li>
                    <li style="list-style-type: none;">Jane: No, that’s not what I mean. It’s just that, if I find you some investors, they’ll want some
                        management control. It won’t really be your business any more. You understand what I’m getting…</li>
                    <li style="list-style-type: none;">Tony: Sure, sure.</li>
                    <li style="list-style-type: none;">Jane: It’s not a decision you can make easily. But you need to think about your future carefully…</li>
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Are these sentences true(T) or false(F)?
                    </p>


                    <ol style="margin: 12px;">
                        <li>
                            Tony's business has had problems recently. ( &emsp; )
                        </li>
                        <li>
                            He's planning to build a new factory. ( &emsp; )
                        </li>
                        <li>
                            He needs to hire some employees. ( &emsp; )
                        </li>
                        <li>
                            He wants to borrow money from the bank. ( &emsp; )
                        </li>
                        <li>
                            Jane asks Tony about his long-term future. ( &emsp; )
                        </li>
                    </ol>

                    <p>
                        Make sentences about yourself using each of these adverbs.<br />
                        - carefully, hard, well, quickly, easily<br />
                        I always check figures carefully.
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
                                                Adverbs of manner<br />
                                                It’s not a <b>quick</b> job. We can’t do it <b>quickly.</b><br />
                                                Our growth has been <b>gradual.</b><br />
                                                We’re grown <b>gradually.</b><br />
                                                He’s a <b>hard</b> worker. He works <b>hard.</b> (irregular)
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

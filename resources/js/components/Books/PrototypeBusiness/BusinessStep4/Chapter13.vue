<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/KYQsU/MADzI_KYQsU/1/s2/canva-woman-in-black-and-white-striped-long-sleeve-shirt-wearing-black-sunglasses-MADzI_KYQsU.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Dealing with problems (Travel problems)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Rachel having a conversation during her trip.</li>
                    <li style="list-style-type: none;">Assistant: Hello.</li>
                    <li style="list-style-type: none;">Rachel: Hello. I’ve just missed my connection to London. I was booked on the nine thirty. I just want to check if my ticket’s valid for the next train… at half past ten.</li>
                    <li style="list-style-type: none;">Assistant: Um… ah yes, you’re OK. Obviously, you won’t have a seat reservation.</li>
                    <li style="list-style-type: none;">Rachel: No. Is it too late to make one?</li>
                    <li style="list-style-type: none;">Assistant: Mmm, I’m afraid so.</li>
                    <li style="list-style-type: none;">Rachel: Will it be busy?</li>
                    <li style="list-style-type: none;">Assistant: It’s usually quite busy, yeah. You’ll probably get a seat in first class, if you want to change your ticket.</li>
                    <li style="list-style-type: none;">Rachel: Would I have to cancel this ticket? Would I get a refund, or…?</li>
                    <li style="list-style-type: none;">Assistant: You can just upgrade it. You just pay a supplement. I can check how much it would cost.</li>
                    <li style="list-style-type: none;">Rachel: Um… oh, no, it’s OK. I don’t think my company would pay my expensive in first class!</li>
                    <li style="list-style-type: none;">Assistant: Ah.</li>
                    <li style="list-style-type: none;">Rachel: OK, thanks. Oh… is the ten thirty on time, by the way?</li>
                    <li style="list-style-type: none;">Assistant: Um… It’s running four minutes late.</li>
                    <li style="list-style-type: none;">Rachel: OK, thanks.</li>
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
                            The next train is at 9.30 ( &emsp; )
                        </li>
                        <li>
                            Rachel’s ticket is OK for the next train. ( &emsp; )
                        </li>
                        <li>
                            She could book a seat on the next time. ( &emsp; )
                        </li>
                        <li>
                            She could go first class if she paid more. ( &emsp; )
                        </li>
                        <li>
                            She changes her ticket. ( &emsp; )
                        </li>
                        <li>
                            The next train is running on time. ( &emsp; )
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about travel problems you’ve had, for example:<br />
                        Long delays and cancelled departures<br />
                        Missing important trains or flights<br />
                        Problems with tickets and reservations<br />
                        Traffic jams
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
                                                I’ve missed my connection. Can I catch the next train?<br />
                                                Is this ticket valid on the next train?<br />
                                                WIf I cancel the ticket, will I get a refund?<br />
                                                If I change the reservation, will I have to pay a supplement?<br />
                                                Are there any seats in first class? Can I upgrade?<br />
                                                Is the train running on time?<br />
                                                The flight’s delayed.
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

<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/d9hmI/MADyQ3d9hmI/1/s2/canva-photo-of-person-holding-mobile-phone-MADyQ3d9hmI.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(254, 183, 43, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Exchanging information by email (Past simple:irregular verbs, Object pronouns)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <ol style="margin: 12px;">
      <p>
      <li>
        Dear Tim<br />
        Please find attached the agenda for the meeting next Tuesday. I also attach other information you need for the meeting: a pie chart of products,
        a bar chart of stocks in the warehouse, a graph of stocks for last month, and a table of customers.
        Alex wrote the minutes for the last meeting- I think he sent them to you.
        But if you don't have them, just ask him to email you a copy.<br />
        <br />
        Best regards,<br />
        Carla
      </li>
    </p>
    <p>
      <li>
        Dear Carla,<br />
        Many thanks for the information. I read all the attachments this morning. I saw Alex yesterday, and he gave me the minutes.
        But I don't have a copy of the schedule for the new warehouse. Alex told me he thought you had the schedule. Could you send it to me?<br />
        <br />
        Regards,<br />
        Tim
      </li>
    </p>
    <p>
      <li>
        Tim,<br />
        I'm afraid I don't have the schedule. But I spoke to Alice Draper, the project engineer,
        and she said she's bringing copies to the meeting for all of us. She wants to give a presentation about the project,
        and she'd like to talk about the schedule then. But if you need a copy before the meeting, you can contact her.
        Her email address is draper@be-structures.com.<br />
        Carla<br />
      </li>
    </p>
    </ol>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Read the emails and answer the questions.
      </p>

      <ol style="margin: 12px;">
        <li>
           Why is Carla sending documents to Tim?
        </li>
        <li>
          How many documents are attached in Carla's email?
        </li>
        <li>
          Does Tim have a copy of the minutes?
        </li>
        <li>
          Who has copies of the schedule for the new warehouse?
        </li>
      </ol>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#527318">
                <v-card-text class="px-10">
                  <p>
                    Object pronouns
                  </p>
                  <p>
                    He sent <b>her</b> five documents. She read <b>them.</b><br />
                    I>me  you>you  he>him  she>her  it>it  we>us  they>them
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

  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

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
  border-color: transparent #899857 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #899857;
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

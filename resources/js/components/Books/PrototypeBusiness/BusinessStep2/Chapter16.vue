<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/hotel-registration_1098-14040.jpg">

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
        padding-bottom: 10px;">Staying at a hotel (have got)

      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Kristi: Hello. I've got a reservation. Kristi Cortland.<br />
      Rec:  Ms Cortland... a single room, for three nights?<br />
      Kristi: That's right.<br />
      Rec:  OK. Could you fill in this form, please?<br />
      Kristi: Sure. Have you got a pen?<br />
      Rec:  Yes. Here you are.<br />
      Kristi: Thanks. Um... It says 'company account number'. I haven't got the number. My company made the reservation,
              but, um, I don't...<br />
      Rec:  It doesn't matter. You don't need to write that. Just put your name, address, passport number, and signature.
              That's fine.<br />
      Kristi: OK.<br />
      Rec:  This is the card for your room.<br />
      Kristi: To open the door?<br />
      Rec:  Yes. You just insert the card, and the door opens automatically.<br />
      Kristi: Right. OK.<br />
      Rec:  It's room three one five, on the third floor.<br />
      Kristi: Right.<br />
      Rec:  In the morning, breakfast is from six-thirty to ten.<br />
      Kristi: From six-thirty. Right.<br />
      Rec:  The dining room's just over there.<br />
      Kristi: OK.<br />
      Rec:  We've got twenty-four-hour room service. Just dial nine from your room.<br />
      Kristi: Right.<br />
      Rec:  Would you like a wake-up call?<br />
      Kristi: Um...no. No, thanks.<br />
      Rec:  OK. And you've got a message from Mr Soga. He says he's coming to the hotel at seven forty-five.<br />
      Kristi: Seven forty-five. Right. OK, thanks very much.<br />
      Rec:  You're welcome. Have a nice day.<br />
      Kristi: Thanks.
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make sentences with the correct form of have got.
      </p>

      <ol style="margin: 12px;">
        <li>
           Do you have the bill?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          We have a reservation for two nights.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          The receptionist has a message for you.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>
      <p>
        Free response:<br />
        alk about your best and worst experiences of staying in hotels. Why were they good or bad?
      </p>

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
                    Fhave got
                  </p>
                  <p>
                    긍정문<br />
                    I'<b>ve got</b> a credit card.
                  </p>
                  <p>
                    부정문<br />
                    We <b>haven't got</b> a reservation.
                  </p>
                  <p>
                    의문형<br />
                    <b>Have</b> you <b>got</b> his number?
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

<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGx9l2kqo/4/screen_2x/canva-woman-at-shoe-store-MADGx9l2kqo.jpg">

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
        padding-bottom: 10px;">Shopping 1 (this/these, that/those)
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
          Assistant:  Do you need any help?<br />
          Customer: Yes, how much is this T-shirt? I can't find the price on it.<br />
          Assistant:  Er... Let's have a look... Is that it, there? Yes. Thirteen pounds.<br />
          Customer: Oh right. OK. Thank you.

        </li>
      </p>
      <p>
        <li>
          Customer: Excuse me. I'm just looking at these shoes. I'm a size forty-five, European size.
          What's that in a UK size? Do you know?<br />
          Assistant:  UK size, that's a ... ten-and-a-half.<br />
          Customer: Right. Could I try them in a ten-and-a-half, then, please?<br />
          Assistant:  Yes, I'll go and get you a pair.<br />
          Customer: Thanks.
        </li>
      </p>
      <p>
        <li>
          Assistant:  That's thirty-nine pounds ninety, please.<br />
          Customer: Can I pay with this credit card?<br />
          Assistant:  Yes, we accept those. That's fine.<br />
          Customer: Here you are.<br />
          Assistant:  Thanks. If you could just sign here. ... Thanks.
        </li>
      </p>
    </ol>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        RFill the gaps with this,that,these,those.
      </p>

      <ol style="margin: 12px;">
        <li>
          Can I try on ( &emsp; &emsp; ) shoes over there?
        </li>
        <li>
          Can I try on ( &emsp; &emsp; ) shoes over there?
        </li>
        <li>
          Can I try on ( &emsp; &emsp; ) shoes over there?
        </li>
        <li>
          Can I try on ( &emsp; &emsp; ) shoes over there?
        </li>
      </ol>

      <p>
        Free response:<br />
        Do you have sales in your country? When are they?<br />
        In your opinion, what are the advantages/disadvantages of shopping in the sales?
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
                    this/these, that/those
                  </p>
                  <p>
                    Things that are very near you, or in your hand:<br />
                    Singular: How much is <b>this</b> shirt?<br />
                    Plural: Are <b>these</b> jeans in the sale?
                  </p>
                  <p>
                    Things that are further from you, that you point at:<br />
                    Singular: I like <b>that</b> mobile phone.<br />
                    Plural: Could I have one of <b>those</b> sandwiches, please?
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

<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGwNkTy5E/5/screen_2x/canva-photo-of-a-woman-holding-shopping-bags-MADGwNkTy5E.jpg">

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
        padding-bottom: 10px;">Shopping 2
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

  <p>
     Person 1<br />
     I don't often go shopping for clothes but when I go, I buy quite a lot. I usually know what I want before I go.<br />
     So I just buy what I need, and come back as soon as I have everything. And I try to go when it's quiet.<br />
     I hate shopping when it's busy.
  </p>
  <p>
    Person 2<br />
    I love shopping... especially for clothes. Even if it's only window shopping. I don't think I spend too much on clothes.<br />
    I don't buy lots of things and then never wear them, like some people. But I can understand why people do that.
  </p>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

<p>
  Person 1
</p>
      <li style="list-style-type: none;">1. How often does she go shopping for clothes?</li>
      <li style="list-style-type: none;">2. Does she buy much on shopping trips?</li>
      <li style="list-style-type: none;">3. When doesn't she like shopping?</li>

      <p>
        Person 2
      </p>

      <li style="list-style-type: none;">4. Does she like shopping?</li>
      <li style="list-style-type: none;">5. Does she spend a lot of money on clothes?</li>
      <li style="list-style-type: none;">6. Does she buy clothes and never wear them?</li>

      <p>
        Free response:<br />
        Do you prefer shopping alone or with someone?<br />
        Where do you like to go shopping (local shops, big shopping centers, out-of-town stores, markets)?
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
                    Shopping language:<br />
                    free, receipt, size, cash, card, sale, changing
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

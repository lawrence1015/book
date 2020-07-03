<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="//live.staticflickr.com/3180/2926813534_f2be857432_c.jpg">

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
        padding-bottom: 10px;">Making plans 2 (Suggestions: Shall I/we...? Let's...)

      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Akio:  The most important job is the brochure-to start work on the sales brochure.<br />
      Kristi: Yes, I agree. I think we need to do that first. Um... but then, I think, before we check the prices, we need to choose
              the photos for the brochure. Hmm... I think that's more important.<br />
      Akio:  Yes, you're right. That is urgent. The marketing people need those photos quickly.<br />
      Kristi: Yes. So, I think that...<br />
      Akio:  And after that we can check the prices.<br />
      Kristi: Yes.<br />
      Akio:  So that's all we need to do on the brochure. Um...<br />
      Kristi: Then. before we talk about new products, it's better if we look at the website design, because there's a lot of work
              to do on that.<br />
      Akio:  Hmm. OK. Then, finally, we can talk about new products.<br />
      Kristi: Mmm, yes, if we have time. Let's do that last. It's less urgent than the other things.<br />
      Akio:  Yes, OK.<br />
      Kristi: So, how much time do we need to do all that?<br />
      Kristi: Yes, OK, good idea. Let's do that.<br />
      Akio:  Well, if we start quite early and work all day on the...
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Are these sentences true (T) or false (F)?
      </p>

      <ol style="margin: 12px;">
        <li>
          It's important to work on the brochure. ( &emsp; )
        </li>
        <li>
          Choosing the photos is quite urgent. ( &emsp; )
        </li>
        <li>
          The website design is a small job. ( &emsp; )
        </li>
        <li>
          Talking about new products is very urgent. ( &emsp; )
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
                    first/after/then/next/finally
                  </p>
                  <p>
                    first/after/then/next/finally<br />
                    Then, we can discuss the design.<br />
                    Next, we can talk about the website.<br />
                    After that, let's discuss new products.<br />
                    Finally, we can talk about new products.
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

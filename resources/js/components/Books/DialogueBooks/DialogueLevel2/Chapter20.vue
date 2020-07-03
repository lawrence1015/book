<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyNeWvYk/4/screen_2x/canva-young-woman-thinking-with-pen-while-working-studying-at-her-desk-MADGyNeWvYk.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Review
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

 <p>
    Answer the questions:
 </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#cae8d5">
                <v-card-text class="px-10">
                  <ol style="margin: 12px;">
                    <li>
                      What does your best friend look like?
                    </li>
                    <li>
                      What are your friends doing right now?
                    </li>
                    <li>
                      Do your parents have a car?
                    </li>
                    <li>
                      What time is it now in Korea?
                    </li>
                    <li>
                      Do you have a laptop or a desktop computer?
                    </li>
                  </ol>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </p>

      <p>
        Choose the correct word:
      </p>

    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>


          <v-flex xs12>
            <v-card light color="#cae8d5">
              <v-card-text class="px-10">
                <ol style="margin: 12px;">
                  <li>
                    This is Mr. Poole. ( &emsp; ) is a teacher.<br />
                    a) Him; b) She; c) He
                  </li>
                  <li>
                    ( &emsp; ) flowers are beautiful.<br />
                    a) This; b) Those; c) There
                  </li>
                  <li>
                    The umbrella is ( &emsp; ) the floor.<br />
                    a) on; b) in; c) at
                  </li>
                  <li>
                    Nancy is ( &emsp; ) the airport.<br />
                    a) in; b) at; c) on
                  </li>
                  <li>
                    Tino ( &emsp; ) thirsty.<br />
                    a) has; b) are; c) is
                  </li>
                  <li>
                    Are the girls pretty? – Yes, ( &emsp; ) are.<br />
                    a) they; b) she; c) them
                  </li>
                  <li>
                    The flowers ( &emsp; ) in the vase.<br />
                    a) is; b) have; c) are
                  </li>
                  <li>
                    ( &emsp; )– He’s at the garage.<br />
                    a) What is he? b) Where is he? c) How is he?
                  </li>
                  <li>
                     Who is she looking ( &emsp; )?<br />
                     a) at; b) on; c) to
                  </li>
                  <li>
                     How  ( &emsp; ) is Jack? – He’s five.<br />
                     a) tall; b) old; c) far
                  </li>
                  <li>
                    He ( &emsp; ) blue eyes and ( &emsp; ) hair.<br />
                    a) is – bald; b) have – black; c) has – blond
                  </li>
                  <li>
                    Thomas ( &emsp; ) 6 feet 2.<br />
                    a) has; b) is; c) have
                  </li>
                </ol>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </p>



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
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
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

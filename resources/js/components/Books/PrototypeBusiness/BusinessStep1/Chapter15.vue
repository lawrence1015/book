<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5BHZWrk/1/screen/canva-brunette-woman-on-white-background-MADQ5BHZWrk.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(72, 87, 125, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Talking About Your Home
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs" :key="dialog">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


<div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Translation</h3>
    <div style="padding : 16px;">

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

    </div>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make sentences. Use very or quite and the adjectives.
      </p>
      <ol style="margin: 12px;">
        <li>
          The house has nine bedrooms and three bathrooms. (big)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          The building has six floors. (high)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          My apartment has one bedroom and a living room. (small)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          The corridor is 7 m. (long)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>
      <p>
        Free response:<br />
        Talk about property prices in your country.
      </p>
      <p>
        Are property prices high?<br />
        In what cities/regions is property expensive/cheap?<br />
        In what parts of your town/region is property expensive/cheap?
      </p>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#9197A6">
                <v-card-text class="px-10">
                  <v-container>
                    <v-layout wrap justify-space-around align-space-around fill-height>

                      <div>
                        <p>
                          Adjectives<br />
                          The apartment is big.<br />
                          It’s a big apartment.
                        </p>
                        <p>
                          Quite/very +adjective<br />
                          It’s very big.<br />
                          It’s quite big.<br />
                          It’s quite small.<br />
                          It’s very small.
                        </p>
                      </div>
                      <v-flex xs10 md5>
                        <v-card hover>
                          <v-img src="images/bigtosmall.jpg" />
                        </v-card>
                      </v-flex>

                    </v-layout>
                  </v-container>
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
        dialogs:[
        {
          name:'A:',
          speech:'So, do you live near the office?'
        },
        {
          name:'B:',
          speech:'Yeah. My house is about… six, seven kilometers from here.'
        },
        {
          name:'A:',
          speech:'Oh, so you live in a house. Not an apartment.'
        },
        {
          name:'B:',
          speech:'Yeah. It’s quite small. Just two bedrooms.'
        },
        {
          name:'A:',
          speech:'Yeah.'
        },
        {
          name:'B:',
          speech:'But, you know, it’s near the center of town, so…'
        },
        {
          name:'A:',
          speech:'Yeah, that’s good. Does it have a garden?'
        },
        {
          name:'B:',
          speech:'Um…'
        },
        {
          name:'A:',
          speech:'You’re not sure!'
        },
        {
          name:'B:',
          speech:'There is a garden, but it’s, um.. very small. It’s about twenty-five square meters!'
        },
        {
          name:'A:',
          speech:'Right.'
        },
        {
          name:'B:',
          speech:'There’s just a bin!'
        },
        {
          name:'A:',
          speech:'OK.'
        },
        {
          name:'B:',
          speech:'It’s quite an old property, but, Um… It’s OK, you know. The problem here is property prices are crazy.'
        },
        {
          name:'A:',
          speech:'Expensive?'
        },
        {
          name:'B:',
          speech:'Oh, yeah. Very. Over the last… four, five years…'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'그럼, 회사 근처에 사세요?'
        },
        {
          name:'B:',
          speech:'네. 우리 집은 여기서 6,7킬로미터 떨어져 있어요.'
        },
        {
          name:'A:',
          speech:'아, 그럼 주택에 사시는군요. 아파트가 아니라.'
        },
        {
          name:'B:',
          speech:'그래요. 꽤 작아요. 침실 두 개만 있어요.'
        },
        {
          name:'A:',
          speech:'그래요.'
        },
        {
          name:'B:',
          speech:'하지만, 아시다시피, 그곳은 시내 중심부 근처에 있어요, 그래서…'
        },
        {
          name:'A:',
          speech:'좋네요. 그곳에는 정원이 있나요?'
        },
        {
          name:'B:',
          speech:'음, 그래요.'
        },
        {
          name:'A:',
          speech:'확실하지 않군요!'
        },
        {
          name:'B:',
          speech:'정원이 있긴 한데, 음, 음.. (정원이) 있어요. 매우 작습니다. 그것은 약 25평방미터입니다!'
        },
        {
          name:'A:',
          speech:'그렇군요.'
        },
        {
          name:'B:',
          speech:'그냥 쓰레기통이 있어요!'
        },
        {
          name:'A:',
          speech:'알겠습니다.'
        },
        {
          name:'B:',
          speech:'꽤 오래된 집이지만, 음… 괜찮아요. 여기서 문제는 부동산 가격이 미쳤다는 것입니다.'
        },
        {
          name:'A:',
          speech:'비싸요?'
        },
        {
          name:'B:',
          speech:'네, 그래요. 아주. 지난 4, 5년 동안 말이죠.'
        },
        ]

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
  border-color: transparent #43464C transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #43464C;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}

.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 5%;
  white-space: nowrap;
}

.lowertable {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

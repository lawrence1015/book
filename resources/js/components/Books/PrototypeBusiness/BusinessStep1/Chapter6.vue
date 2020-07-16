<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv7uLs2Y/6/screen_2x/canva-people-at-la-poma-store-front-at-night-MADGv7uLs2Y.jpg">

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
        padding-bottom: 10px;">Buying food
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

      <h3>MPractise buying snacks and drinks in a café.</h3>

      <p>
        A: Could I have ( &emsp; &emsp; ), please<br />
        B: Anything else?<br />
        A: No, thanks./ Yes, ( &emsp; &emsp; )<br />
        B: €( &emsp; &emsp; ), please.
      </p>

      <v-container grid-list-md text-xs-center>
        <v-layout wrap align-content-center>

          <v-flex xs12 md6 >
            <v-card hover>

              <v-img src="images/snacksdrinks.jpg" />

            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

<p>
  Free response:<br />
  What’s the currency in your country? How do you say it in English?<br />
  How much is a Big Mac in your country?
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
                  <p>
                    복수<br />
                    A sandwich > Two sandwich<b>es</b><br />
                    A coffee > Three coffee<b>s</b>
                  </p>
                  <p>
                    <b>$=dollar €=euro ￥=yen ￡=pound$=dollar €=euro ￥=yen ￡=pound</b>
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
        dialogs:[
        {
          name:'A:',
          speech:'Could I have a burger, please?'
        },
        {
          name:'B:',
          speech:'Anything else?'
        },
        {
          name:'A:',
          speech:'Um. Yes, and a tea, please.'
        },
        {
          name:'B:',
          speech:'That’s four euros sixty-five, please.'
        },
        {
          name:'A:',
          speech:'Four sixty-five.'
        },
        {
          name:'B:',
          speech:'Thanks'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Two hotdogs, please.'
        },
        {
          name:'B:',
          speech:'Two?'
        },
        {
          name:'A:',
          speech:'Yes, please. And two coffees. How much is that?'
        },
        {
          name:'B:',
          speech:'Um… eight seventy.'
        },
        {
          name:'A:',
          speech:'OK, eight dollars seventy.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Two tuna sandwiches, please. And a cheese sandwich.'
        },
        {
          name:'B:',
          speech:'Anything else?'
        },
        {
          name:'A:',
          speech:'No. thanks.'
        },
        {
          name:'B:',
          speech:'OK. That’s seven pounds eighty.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'버거 좀 주시겠습니까?'
        },
        {
          name:'B:',
          speech:'다른 건 필요없으신가요?'
        },
        {
          name:'A:',
          speech:'네, 차 한 잔이요.'
        },
        {
          name:'B:',
          speech:'4유로 65센트 입니다.'
        },
        {
          name:'A:',
          speech:'4 65.'
        },
        {
          name:'B:',
          speech:'감사합니다.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'핫도그 두 개 주세요.'
        },
        {
          name:'B:',
          speech:'두 개요?'
        },
        {
          name:'A:',
          speech:'네. 그리고 커피 두 잔이요. 얼마입니까?'
        },
        {
          name:'B:',
          speech:'음…8 70.'
        },
        {
          name:'A:',
          speech:'알겠습니다, 8달러 70센트.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'참치 샌드위치 두 개 주세요. 그리고 치즈 샌드위치도요.'
        },
        {
          name:'B:',
          speech:'다른 건 필요없으신가요?'
        },
        {
          name:'A:',
          speech:'괜찮아요.'
        },
        {
          name:'B:',
          speech:'알겠습니다. 7파운드 80페니입니다.'
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

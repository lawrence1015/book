<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5KOtx9I/1/screen_2x/canva-a-man-at-work-MADQ5KOtx9I.jpg">

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
        padding-bottom: 10px;">Describing a company (Present simple: positive and questions)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
  
      <tr v-for="dialog in dialogs">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Translation</h3>
    <div style="padding : 16px;">

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

    </div>
    
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p><b><u>Underline</u> the correct words in the questions.</b></p>

        <ol style="margin: 12px;">
          <li>
             Where (do/does) your steel (come/comes) from?
          </li>
          <li>
             Where (do/does) we (buy/buys) it?
          </li>
          <li>
             (Do/Does) it (come/comes) from Germany?
          </li>
          <li>
             Where (do/does) you (sell/sells) your products?
          </li>
        </ol>

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
                      현재형
                    </p>
                    <p>
                      긍정문 They <b>own</b> the company. He has Australian nationality..<br />
                      의문문 <b>Do</b> they <b>have</b> customers in China? Where <b>does</b> she <b>come</b> from?
                    </p>
                    <p>
                      250= two hundred and fifty<br />
                      12,000= twelve thousand<br />
                      50,000= fifty thousand<br />
                      2.5 million= two point five million<br />
                      3 billion= three billion
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
        dialogs:[
        {
          name:'Frank:',
          speech:'At this factory, we make steel products. And at the other factory in Munich, they make products from aluminium.'
        },
        {
          name:'Jane:',
          speech:'Right. Where does your steel come from?'
        },
        {
          name:'Frank:',
          speech:'Where do we buy it?'
        },
        {
          name:'Jane:',
          speech:'Yeah.'
        },
        {
          name:'Frank:',
          speech:'From a supplier here, in Hamburg.'
        },
        {
          name:'Jane:',
          speech:'Right. And does it come from Germany?'
        },
        {
          name:'Frank:',
          speech:'No. It comes from China. Our supplier is an importer.'
        },
        {
          name:'Jane:',
          speech:'OK.'
        },
        {
          name:'Frank:',
          speech:'We buy about two hundred and fifty tonnes a year. So we’re only a small buyer. But… with two hundred and fifty tonnes of steel, We make twelve thousand products.'
        },
        {
          name:'Jane:',
          speech:'Right. So you make twelve thousand products a year at this factory. Where do you sell your products?'
        },
        {
          name:'Frank:',
          speech:'We sell fifteen percent of them in Germany, and… the other eighty-five percent…all over the world. We have customers in…. twenty-two countries.'
        },
        {
          name:'Jane:',
          speech:' Huh, OK.'
        },
        {
          name:'Frank:',
          speech:'In the UK, we sell a lot of equipment to a company in…'
        },
        ],

        translations:[
        {
          name:'프랭크:',
          speech:'이 공장에서는 철강 제품을 만듭니다. 그리고 뮌헨의 다른 공장에서는 알루미늄으로 제품을 만듭니다.'
        },
        {
          name:'제인:',
          speech:'그렇군요. 당신의 강철은 어디에서 왔습니까?'
        },
        {
          name:'프랭크:',
          speech:'우리가 어디서 강철을 사냐구요?'
        },
        {
          name:'제인:',
          speech:'그래요.'
        },
        {
          name:'프랭크:',
          speech:'여기 함부르크에 있는 공급업자한테서요.'
        },
        {
          name:'제인:',
          speech:'맞아요. 그리고 그것은 독일에서 왔나요?'
        },
        {
          name:'프랭크:',
          speech:'아니요. 그것은 중국에서 왔습니다. 우리의 공급자는 수입업자이다.'
        },
        {
          name:'제인:',
          speech:'알았어요.'
        },
        {
          name:'프랭크:',
          speech:'우리는 일년에 약 250톤을 삽니다. 그래서 우리는 작은 구매자에 불과해요. 하지만 250톤의 강철로 1만 2천개의 제품을 생산하고 있습니다.'
        },
        {
          name:'제인',
          speech:'맞아요. 그래서 당신은 이 공장에서 1년에 1만 2천 개의 제품을 생산합니다. 당신은 제품을 어디에서 파나요?'
        },
        {
          name:'프랭크:',
          speech:'그 중 15퍼센트는 독일에서 판매하고 나머지 85퍼센트는 전세계에서 판매하고 있습니다. 22개국에 고객이 있습니다.'
        },
        {
          name:'제인:',
          speech:'허, 알았어요.'
        },
        {
          name:'프랭크:',
          speech:'영국에서는 많은 장비를 한 회사에 판매하고 있습니다.'
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

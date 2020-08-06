<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="//live.staticflickr.com/5537/11261399165_8d8577a05b_4k.jpg" style="max-width: 100%; display:block; height: auto;">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(76, 187, 185, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">In-flight Meal
      </h1>
    </v-layout>
  </v-img>


  <hr style="border: 3px solid rgba(119, 216, 216, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


      <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
      </div>
      <h3 style="background-color: #4cbbb9;
                 padding-top : 10px;
                 padding-left : 10px;
                 padding-bottom: 10px;
                 padding-right : -16px;
                 margin-left: -18px;
                 margin-right: -18px;"
          class="underline">Words</h3>
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
      </div>
      <div style="padding : 16px;">

        <p>
          <i>meal</i>식사[끼니], 식사[밥], 으깬 곡물, 식사; 식사 시간
        </p>
        <p>
          <i>extra charge</i>할증요금
        </p>
        <p>
          <i>beverages</i>기호음료금
        </p>
        <p>
          <i>Non-alcoholic Drink</i>비알콜성 음료
        </p>
        <p>
          <i>vegetarian</i>채식주의자, 고기[생선]를 안 먹는 사람
        </p>
        <p>
          <i>dietary</i>음식물의; 규정식의; 식이 요법의, 규정식; 규정량
        </p>
        <p>
          <i>overbook a flight</i>정원 이상으로 예약을 받다.
        </p>
        <p>
          <i>cocktail</i>칵테일, 혼합제, 꼬리 자른 말; 잡종말., 사이비 신사, 벼락 출세자.
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
      </div>
      <h3 style="background-color: #4cbbb9;
                 padding-top : 10px;
                 padding-left : 10px;
                 padding-bottom: 10px;
                 padding-right : -16px;
                 margin-left: -18px;
                 margin-right: -18px;"
          class="underline">Activity</h3>
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
      </div>
      <div style="padding : 16px;">
        <h4>QUESTIONS:</h4>
        <p>
          <b>A.  Answer the following questions:</b>
        </p>
        <ol style="margin: 12px;">
          <li>
            How can the airline know that you want religious or dietary meals?
          </li>
          <li>
            Do you have to pay for the extra charge when you change your drink?
          </li>
          <li>
            When you book your flight, do you also include in-flight meals?
          </li>
        </ol>
        <h4>EXPRESSIONS</h4>
        <p style="margin: 15px;">
          <i>
            You just have to add an extra charge for that.<br />
            I was wondering if I could change my drink into a different one.<br />
            We offer non-alcoholic beverages for free.<br />
            OK, that's fine. That would be all.
          </i>
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
      </div>
      <h3 style="background-color: #4cbbb9;
                 padding-top : 10px;
                 padding-left : 10px;
                 padding-bottom: 10px;
                 padding-right : -16px;
                 margin-left: -18px;
                 margin-right: -18px;"
          class="underline">Translation</h3>
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
      </div>
           <div style="padding : 16px;">


            <table style = "border-collapse: collapse;">

              <tr v-for="translation in translations">
                <td class = "uppertable" >{{translation.name}}</td>
                <td class = "lowertable" >{{translation.speech}}</td>
              </tr>
      
            </table>


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
          name:'Stewardess:',
          speech:'Here’s your meal Sir.'
        },
        {
          name:'Matt:',
          speech:'I was wondering if I could change my drink into a different one.'
        },
        {
          name:'Stewardess:',
          speech:'I’m sorry Sir but this is already the menu indicated for your meal when you booked your flight. If you want, you can change it, but we just have to add an extra charge for that.'
        },
        {
          name:'Matt:',
          speech:'No problem. How much do they cost?'
        },
        {
          name:'Stewardess:',
          speech:'We offer non-alcoholic beverages for free. Our cocktails are five dollars each.'
        },
        {
          name:'Matt:',
          speech:'Oh and another one. Do you have vegetarian meals?'
        },
        {
          name:'Stewardess:',
          speech:'We serve a variety of meals for people with religious or dietary restrictions. We do need to know about this by the time you book your flight.'
        },
        {
          name:'Matt:',
          speech:'OK, that’s fine. That would be all. Thank you.'
        },
        ],

        translations:[
        {
          name:'스튜어디스:',
          speech:'식사 나왔습니다. 손님.'
        },
        {
          name:'매트:',
          speech:'음료를 다른 음료로 바꿀 수 있을까요.'
        },
        {
          name:'스튜어디스:',
          speech:'죄송합니다 손님, 항공편을 예약하셨을 때 이미 식사에 적힌 메뉴입니다. 원하시면 변경 가능하신데, 추가 비용만 추가하시면 됩니다.'
        },
        {
          name:'매트:',
          speech:'문제없습니다. 얼마인가요?'
        },
        {
          name:'스튜어디스:',
          speech:'무알코올 음료는 무료로 제공합니다. 칵테일은 각각 5달러입니다.'
        },
        {
          name:'매트:',
          speech:'아 그리고 또 다른 게 하나 있습니다. 채식주의자를 위한 식사가 있습니까?'
        },
        {
          name:'스튜어디스:',
          speech:'종교적이거나 식생활에 제약이 있는 사람들을 위해 다양한 식사를 제공합니다. 우리는 손님이 항공편을 예약할 때 이것에 대해 알아야 합니다'
        },
        {
          name:'매트:',
          speech:'네, 괜찮아요. 그게 전부일 거예요. 감사합니다.'
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

.underline {


}

.border {
  position: relative;
  left: 0px;
  width: 255px;
  height: 40px;
  background: #2F4674;
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

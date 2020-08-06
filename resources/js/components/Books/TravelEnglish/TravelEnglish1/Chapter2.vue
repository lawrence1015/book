<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/mN_lA/MAD9zymN_lA/1/s2/canva-black-seats-in-airplane-MAD9zymN_lA.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Finding Seats
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
          aboard  탄, 탑승[승선]한
        </p>
        <p>
          boarding pass 탑승권
        </p>
        <p>
          assigned 할당된
        </p>
        <p>
          seat 자리, 좌석, 좌석이
        </p>
        <p>
          window seat 창쪽 좌석
        </p>
        <p>
          aisle seat 통로 쪽 좌석
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
            Have you ever changed your flight seat to someone?
          </li>
          <li>
            What is your preferred seat? Aisle seat? Middle seat? Or Window seat?
          </li>
          <li>
            What do you usually do if you’re in your seat?How often do you stand up and go to the lavatory?
          </li>
        </ol>
        <h4>EXPRESSIONS</h4>
        <p style="margin: 15px;">
          <i>
            Can you help me find my seat?<br />
            Can I move to a window seat?<br />
            Please let me check your boarding pass.
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
          speech:'Welcome, aboard Los Angeles Airlines!'
        },
        {
          name:'Matt:',
          speech:'Hi, can you please help me find my seat?'
        },
        {
          name:'Stewardess:',
          speech:'Certainly, Sir, can I have your boarding pass, please?'
        },
        {
          name:'Matt:',
          speech:'Here it is.'
        },
        {
          name:'Stewardess:',
          speech:'Your assigned seat is 26B, that is a middle seat. Let me take you there.'
        },
        {
          name:'Matt:',
          speech:'Can I move to a window seat or an aisle seat?'
        },
        {
          name:'Stewardess:',
          speech:'I do apologize. All seats are filled in at the moment. Here is your seat, 26B. Enjoy the flight.'
        },
        ],

        translations:[
        {
          name:'스튜어디스:',
          speech:'로스앤젤레스 항공에 탑승하신 것을 환영합니다!'
        },
        {
          name:'매트:',
          speech:'안녕하세요, 제 자리 찾는 것 좀 도와주시겠어요?'
        },
        {
          name:'스튜어디스:',
          speech:'네, 손님, 탑승권 좀 주시겠어요?'
        },
        {
          name:'매트:',
          speech:'여기 있습니다.'
        },
        {
          name:'스튜어디스:',
          speech:'배정된 좌석은 26B, 그것도 중간 좌석입니다. 제가 안내해 드릴게요.'
        },
        {
          name:'매트:',
          speech:'창가 쪽 좌석이나 통로 쪽 좌석으로 옮길 수 있나요?'
        },
        {
          name:'스튜어디스:',
          speech:'정말 죄송합니다. 지금은 모든 좌석이 꽉 찼습니다.여기 26B라는 좌석입니다. 즐거운 비행 되세요.'
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

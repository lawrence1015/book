<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv4TLi8w/6/screen_2x/canva-people-inside-commercial-air-plane-MADGv4TLi8w.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">On the Plane
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

        <table>
        <tr>
        <td>destination 목적지, 도착지, 사람들이 특별히 찾는 호텔/상점/식당 등 </td>
        <td>fasten 매다[채우다]; 매이다[채워지다],   잠그다[잠기다], 고정시키다</td>
        </tr>
        <br />
        <tr>
        <td>vacation 방학; 방학; 휴정</td>
        <td>seat belt 안전벨트, 안전띠</td>
        </tr>
        <br />
        <tr>
        <td>take off 도약; 출발., 이륙[이수]., 출발점, 도약</td>
        <td>passenger 승객, 군식구 같은 사람들   </td>
        </tr>
        <br />
        <tr>
        <td>pre-flight test 비행 전 시험</td>
        <td>landing 층계참, 착륙, 상륙[착륙]시킴</td>
        </tr>
        <br />
        <tr>
        <td>departure 떠남, 출발, 출발, 벗어남[일탈]  </td>
        <td>runway 활주로  </td>
        </tr>
       </table>

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
            Have you ever traveled by plane?
          </li>
          <li>
            When was the last time you traveled by plane?
          </li>
          <li>
            How was your experience?
          </li>
        </ol>
        <h4>EXPRESSIONS</h4>
        <p style="margin: 15px;">
          <i>
            for a vacation<br />
            for a business meeting<br />
            doing some pre-flight tests<br />
            Please fasten your seat belt.<br />
	          The plane is still on the runway.<br />
            The plane is taking off.<br />
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
          name:'Matt:',
          speech:'(restless and keeps on looking to the left and right) I’m excited to reach our destination. It’s my first time traveling by myself for a vacation.'
        },
        {
          name:'Sarah:',
          speech:'Yes, I can see that. Traveling is so much fun, unfortunately, I’ll be there for a business meeting.'
        },
        {
          name:'Matt:',
          speech:'Oh, too bad. Anyway, why does the plane take so long to take off?'
        },
        {
          name:'Sarah:',
          speech:'I think they are still doing some pre-flight tests.'
        },
        {
          name:'Matt:',
          speech:'Perhaps. I guess we are still on the runway.'
        },
        {
          name:'Sarah:',
          speech:' Yes, that must be. Look here, you haven`t fastened your seat belt yet.'
        },
        {
          name:'Matt:',
          speech:'Oh, thank you. I’ve forgotten all about it in the excitement of our departure.'
        },
        {
          name:'Sarah:',
          speech:'You mustn’t, it’s dangerous not to fasten your seat belt when the plane is taking off or landing.'
        },
        {
          name:'Matt:',
          speech:'I know it is. Thanks.'
        },
        ],

        translations:[
        {
          name:'매트:',
          speech:'(휴식하지 않고 계속 좌우를 바라보고) 목적지에 도착하게 된다니 흥분됩니다. 휴가 때 혼자 여행하는 건 처음이에요.'
        },
        {
          name:'사라:',
          speech:'네,  그래요. 여행은 너무 재미있죠. 아쉽게도 저는 사업 회의에 참석하려고 해요.'
        },
        {
          name:'매트:',
          speech:'아, 안됐군요. 그나저나, 비행기가 이륙하는 데 왜 이렇게 오래 걸리죠?'
        },
        {
          name:'사라:',
          speech:'제 생각에 그들은 여전히 비행 전 테스트를 하고 있는 것 같아요.'
        },
        {
          name:'매트:',
          speech:'아마도요. 아직 활주로에 있는 것 같아요.'
        },
        {
          name:'사라:',
          speech:'네, 틀림없습니다. 여기 보세요, 아직 안전벨트를 매지 않았군요..'
        },
        {
          name:'매트:',
          speech:'아, 고마워요. 저는 우리가 떠난다는 것에 흥분에서 그것에 대해 모두 잊어버렸습니다.'
        },
        {
          name:'사라:',
          speech:'그러면 안 돼요, 비행기가 이륙하거나 착륙할 때 안전벨트를 매지 않는 것은 위험해요.'
        },
        {
          name:'매트:',
          speech:'알고 있어요. 감사합니다.'
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

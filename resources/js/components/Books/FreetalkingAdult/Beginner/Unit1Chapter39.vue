<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGvh77aOc/7/screen/canva-multicolored-abacus-photography-MADGvh77aOc.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Science and Technology</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>For the past millennia, humans have created wondrous, useful things. This proves our ingenuity and skill, setting us apart from other creatures. Through the years, we have kept on upgrading. The super computers we now have only started with the abacus; the massive fleets, from simple rafts; and the spacecrafts and airplanes, from kites and the mere wish to fly. Only our will and imagination is the limit. We must never forget though that whatever we create should not destroy our planet or humanity itself.
</p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Millennium</u> - 1,000 years (plural form is millennia) <span style="font-size:16px">천년, 새로운 천년이 시작되는 시기</span>
</li>

<li style="list-style-type: none;"><u>Wondrous</u> - exciting and amazing <span style="font-size:16px">경이로운, 경탄스러운</span>
</li>

<li style="list-style-type: none;"><u>Ingenuity</u> -  inventiveness or cleverness <span style="font-size:16px">기발한 재주, 재간, 독창성</span>
</li>

<li style="list-style-type: none;"><u>Set apart</u> - to make something different <span style="font-size:16px">떼어 두다, 따로 하다; 구별하다, 눈에 띄게 하다; 보류하다.</span>
</li>

<li style="list-style-type: none;"><u>Upgrade</u> - to improve in quality <span style="font-size:16px">개선하다, 승진[승급]시키다, 상위 등급으로 높여주다</span>
</li>

<li style="list-style-type: none;"><u>Humanity</u> - the human race <span style="font-size:16px">인류, 인간, 인간성, 인간임, 인간애; 인도적임, 인문학</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>These pyramids were built two ________ ago.
  </li>

  <li>If everybody's goal is to help ________, what a wonderful world will this be!
  </li>

  <li>We want to ______ our phone to the newest model.
  </li>

  <li>Loving and being loved is a _____ experience.
  </li>

  <li>Thomas Edison’s _______ made him an inspiring and famous inventor.
  </li>

  <li>His persistence and happy energy _____ him _____ from the other athletes.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What set humans apart from other creatures?
</li>

<li>From what did computers start?
</li>

<li>What is humanity’s limit?
</li>

<li>What should we never forget?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;">

<p>지난 천년 동안 인간은 경이롭고 유용한 것들을 창조해 왔다. 이것은 우리의 독창성과 기술을 증명하여 우리를 다른 생물들과 차별화시킨다. 지난 몇 년 동안 우리는 계속 업그레이드해왔다. 우리가 지금 가지고 있는 슈퍼 컴퓨터는 주판에서 시작되었고 거대한 함대는 단순한 뗏목에서, 우주선과 비행기들은 연과 날고 싶은 단순한 소망으로 시작한 것이다. 우리의 의지와 상상력만이 한계다. 비록 우리가 창조하는 것이 무엇이든 우리의 행성이나 인류 자체를 파괴해서는 안 된다는 것을 결코 잊어서는 안 된다.
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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

body{

  font-size: 16px;
}

</style>

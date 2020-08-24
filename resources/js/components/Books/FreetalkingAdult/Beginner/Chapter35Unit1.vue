<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ488f75c/1/screen/canva-hand-holding-four-leaf-clover-MADQ488f75c.jpg">

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
        padding-bottom: 10px;">Superstition</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Carry a rabbit's feet or a four-leaf clover in your pocket. They are believed to bring good luck. Never ever walk under a ladder leaned against the wall or open an umbrella inside the house. If you do, bad luck is sure to follow. Friday the thirteenth is an unlucky day so stay inside your house and never go out if possible. If your palms itch, you will have money. If your soles itch, you will have a trip. If you give someone a purse or a wallet without money in it, it will bring the person bad luck.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Lean(v)</u> - to rest against something <span class = "korean">기울다[기울이다], (몸을) 숙이다[굽히다/젖히다],~에 기대다[의지하다]</span> 
</li>

<li style="list-style-type: none;"><u>Palms(n)</u> -  inner surface of the hand <span class = "korean">손바닥, 야자과 나무</span>
</li>

<li style="list-style-type: none;"><u>Itch(v)</u> -  a sensation that you want to scratch the skin <span class = "korean">가렵다[가렵게 하다], 근질거리다[근지럽다]</span>
</li>

<li style="list-style-type: none;"><u>Sole(n)</u> -  the bottom part of your feet <span class = "korean">유일한, 단 하나의, 혼자[단독]의,발바닥, 바닥, 밑창</span>
</li>

<li style="list-style-type: none;"><u>Gift(v)</u> - to give somebody a present or a gift <span class = "korean">선물; 기증품, 재능, 재주</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Will you ________ your daughter a car on her 18th birthday?
  </li>

  <li>My head _________. I think I have some dandruff!
  </li>

  <li>Put your _________ together and pray.
  </li>

  <li>I hurt my _________ when I stepped on a sharp rock.
  </li>

  <li>Do not ________ on the glass counter because it might break!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What will bring good luck? Bad luck?
</li>

<li>What will you do on Friday the 13th? Why?
</li>

<li>What will bring money?
</li>

<li>What will happen if your soles itch?
</li>

<li>What gift will bring a person bad luck?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

<p>
  토끼발이나 네 잎 클로버를 주머니에 넣고 다녀라. 그들은 행운을 가져온다고 믿어진다. 절대로 벽에 기대어져 있는 사다리 아래로 건너거나  집 안에서 우산을 펴지 말라. 만약 그렇다면, 불운은 반드시 따라올 것이다. 13일의 금요일은 불운한 날이니 집에 있고 가능하면 절대 나가지 마라. 손바닥이 근질거리면 돈이 생긴다. 발바닥이 가려우면 여행을 하게 된다. 만약 당신이 누군가에게 지갑이나 돈이 없는 지갑을 선물한다면, 그것은 그 사람에게 불운을 가져다 줄 것이다.
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

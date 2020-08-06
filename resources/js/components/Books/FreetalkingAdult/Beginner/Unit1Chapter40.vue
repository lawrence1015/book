<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

 <v-layout column>
   <v-img
          src="https://image.freepik.com/free-photo/family-together-christmas-celebration-concept_53876-46896.jpg">

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
       padding-bottom: 10px;">Holidays</h1>
     </v-layout>
   </v-img>


         <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
              <div style="padding : 16px;">

<p>The time of the year my family look forward to the most is Christmas. For us, it’s a joyous celebration of love and family. Every December 1st, we will bring out the Christmas tree out and decorate it together. We also have a tradition of gift-giving. We will place our gifts under the tree and wait for Christmas Eve to open them. Last year, I received a Harry Potter set from my mother! No wonder why its box was so big and heavy! I felt embarrassed because the gift I gave was only cheap– a set of floral handkerchiefs. On Christmas Eve our table is full of delicious dishes such as roasted chicken, spaghetti, cake, salad, and pies!
</p>

<h3 style="padding-top: 7px;
           margin-left: -18px;
           margin-right: -18px;
           padding-left: 10px;
           padding-bottom: 10px;
           padding-top: 10px;
           margin-top: 10px;
           background-color: #a7d7c5;">Vocabulary Review
</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Look forward to(v)</u> -  to wait for something excitedly <span class = "korean">…을 기대하다, 즐거운 마음으로 기다리다.</span>
</li>

<li style="list-style-type: none;"><u>Joyous(adj)</u> -   full of joy <span class = "korean">아주 기뻐하는; 기쁜, 기쁨을 주는</span>
</li>

<li style="list-style-type: none;"><u>Celebration(n)</u> -  a happy occasion <span class = "korean">기념[축하] 행사, 기념[축하]</span>
</li>

<li style="list-style-type: none;"><u>Tradition(n)</u> -    long-established pattern of actions <span class = "korean">전통</span>
</li>

<li style="list-style-type: none;"><u>Set(n)</u> -  a collection <span class = "korean">놓다, 하다, 배경[무대]을 설정하다, 맞추다, 차리다[보다]</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
 <li>Should I buy jewelries by piece or by ____?
 </li>

 <li>For me, Chuseok is our family’s most ______ occasion.
 </li>

 <li>I ____________ the day that I will see you again.
 </li>

 <li>Based on our _______, May is the month of festivals.
 </li>

 <li>We will go to a wedding _______ tomorrow.
 </li>




</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is the writer’s family’s favorite holiday?
</li>

<li>What is Christmas for them?
</li>

<li>What do they do every December 1st?
</li>

<li>What do they do with their gifts?
</li>

<li>What did he receive last year?
</li>

<li>Why did he feel embarrassed?
</li>
</ol>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

    <p>1년 중 가족이 가장 고대하는 시간은 크리스마스다. 우리에게는 사랑과 가족의 즐거운 축전이다. 매년 12월 1일 크리스마스 트리를 꺼내 함께 장식할 것이다. 우리는 또한 선물을 주는 전통이 있다. 우리는 선물을 나무 밑에 놓고 크리스마스 이브가 열릴 때까지 기다릴 것이다. 작년에, 나는 우리 엄마로부터 해리포터 세트를 받았다! 왜 그것의 상자가 그렇게 크고 무거웠는지 당연했다! 내가 준 선물은 값싼 꽃 손수건 세트여서 나는 당황했다. 크리스마스 이브에 우리 테이블은 구운 치킨, 스파게티, 케이크, 샐러드, 파이와 같은 맛있는 음식들로 가득 차 있다!
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

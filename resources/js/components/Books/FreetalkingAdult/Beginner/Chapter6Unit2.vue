<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

<div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="//live.staticflickr.com/1915/31831943298_90a9c0eff4_z.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">

<p>Do you know what halo-halo is? It is a delicious and colorful dessert that I tried during my stay in the Philippines last summer vacation. It is very delightful and nutritious food. First, you have to prepare crushed ice and put it in a glass or a bowl. Second, you just add a variety of ingredients like sweetened banana, beans, coconut and melon strips, yam paste, sugar, and others. Third, to boost the flavor, milk is poured and a scoop of ice cream is added on the top! It is called halo-halo because the word "halo" means “mix" and to enjoy it, all you have to do is mix the ingredients with your spoon! Isn't it very simple and easy to make?
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Delightful</u> - pleasing and enjoyable <span class = "korean">정말 기분 좋은[마음에 드는]</span>
</li>

<li style="list-style-type: none;"><u>Nutritious</u> - healthy <span class = "korean">영양분이 많은, 영양가가 높은</span>
</li>

<li style="list-style-type: none;"><u>Crushed</u> - to grind into smaller pieces <span class = "korean">으깨진</span>
</li>

<li style="list-style-type: none;"><u>Variety</u> -  different and many <span class = "korean">여러 가지, 갖가지, 각양각색, 다양성, 품종[종류]</span>
</li>

<li style="list-style-type: none;"><u>Boost</u> - to increase <span class = "korean">신장시키다, 북돋우다</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>There was a _____________ of shoes   in the shop. You can choose from a lot of designs.
  </li>

  <li>Vegetables are _________. They're good for your health.
  </li>

  <li>Our trip to Italy was _____________!
  </li>

  <li>These _________ glass will be recycled into new bottles.
  </li>

  <li>Good marketing will ____________ our sales.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is “halo-halo”?
</li>

<li>What are the ingredients?
</li>

<li>What is the first step in making it?
</li>

<li>What is the last step?
</li>

<li>Why is it called “halo-halo”?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">
       <p>
         헤일로할로가 뭔지 아세요? 그것은 지난 여름 방학에 필리핀에 머무는 동안 먹어본 맛있고 다채로운 디저트입니다. 그것은 매우 즐겁고 영양가 있는 음식입니다. 먼저 으깨진 얼음을 준비하여 잔이나 그릇에 담아야 합니다. 둘째, 달인 바나나, 콩, 코코넛과 멜론 조각, 야마자, 설탕, 그리고 다른 것들과 같은 다양한 재료들을 넣습니다. 셋째, 맛을 돋우기 위해 우유를 붓고 위에 아이스크림 한 주걱을 얹습니다! '할로'란 말은 '믹스'를 의미하기 때문에 헤일로할로(halo-halo)라고 불리는데, 그것을 즐기기 위해서는 숟가락으로 재료를 섞기만 하면 됩니다! 아주 간단하고 쉽게 만들 수 있지 않은가요?
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

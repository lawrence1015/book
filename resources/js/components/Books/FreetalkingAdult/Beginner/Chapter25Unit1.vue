<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGyXnKFlU/4/screen_2x/canva-black-green-brown-continent-MADGyXnKFlU.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Nations of the World</h1>
                </v-layout>
            </v-img>


            <h3 style="background-color: #a7d7c5;   
                       padding-top : 10px;  
                       padding-left : 10px; 
                       padding-bottom: 10px;">Reading Practice <br><span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
            <div style="padding : 16px;">

                <p>A country refers to a single state that has its own independent government. There are currently countries in the world. Every country belongs to a continent. A continent refers to a continuous unit of land. There are seven
                    continents namely; Asia, Africa, Europe, Australia, North America, South America and Antarctica. The largest is Asia which contains 30 percent of the world's total land area. Asia includes countries like Korea, China, Japan,
                    Philippines, India, Saudi Arabia, Egypt, and even some parts of Russia and many others.
                </p>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

                <div style="padding : 16px;">



                    <li style="list-style-type: none;"><u>Single(n)</u> - only one <span style="font-size:16px">단 하나의, 단일의, &lt;특정한 사람사물 단 하나만을 말함을 강조할 때 씀&gt;</span>
                    </li>

                    <li style="list-style-type: none;"><u>Independent(adj)</u> - not controlled by another <span style="font-size:16px">독립된, 독립적인[독자적인], 독립된[별개의]</span>
                    </li>

                    <li style="list-style-type: none;"><u>Currently(adv)</u> - now, at the present <span style="font-size:16px">현재, 지금</span>
                    </li>

                    <li style="list-style-type: none;"><u>Continuous(adj)</u> - without stop or end <span style="font-size:16px">계속되는, 지속적인, 계속 이어지는, 반복된[거듭된]</span>
                    </li>

                    <li style="list-style-type: none;"><u>Include(v)</u> - to make something part of a group <span style="font-size:16px">포함하다, ~을 포함시키다</span>
                    </li>

                    <p>Fill in the blanks using the words above.
                    </p>

                    <ol style="margin: 12px;">
                        <li>Our cell phone products are not __________ available but please check again next week.
                        </li>

                        <li>They should _________ beef steak and red wine as parts of the menu.
                        </li>

                        <li>While studying English away from my family, I have to be
                        </li>

                        <li>There is only a _______ road to go to that place.
                        </li>

                        <li>My professor's ___________ talking went on for about two hours!
                        </li>

                    </ol>

                </div>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

                <div style="padding : 16px;">

                    <ol style="margin: 12px;">
                    <li>What is a country?
                    </li>

                    <li>How many countries are there in the world?
                    </li>

                    <li>What is a continent?
                    </li>

                    <li>What is special about Asia?
                    </li>

                    <li>Name some countries from Asia.
                    </li>
                    </ol>


                </div>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

                <div style="padding : 16px;" class = "korean">

                    <p>국가는 독자적인 정부를 가진 단일 국가를 말한다. 현재 세계에는 나라들이 있다. 모든 나라는 대륙에 속한다. 대륙은 땅의 연속적인 단위를 말한다. 아시아, 아프리카, 유럽, 호주, 북미, 남미, 남극 대륙 등 7개 대륙이 있다. 가장 큰 곳은 세계 전체 국토 면적의 30%를 차지하는 아시아다. 아시아는 한국, 중국, 일본, 필리핀, 인도, 사우디아라비아, 이집트 그리고 심지어 러시아의 일부 지역 그리고 다른 많은 나라들을 포함한다.
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

    data() {

        return {


        }

    },


    beforeMount() {


    },

    methods: {


    },

    watch: {

        fontSize(current, old) {

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

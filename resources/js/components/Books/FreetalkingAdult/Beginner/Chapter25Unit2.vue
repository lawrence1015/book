<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <div style="padding : 16px;">

                <div style="margin-left: -18px;
                            margin-right: -18px;
                            margin-bottom: -10px;">
                    <v-img src="https://marketplace.canva.com/MADQ4tkqI2E/1/screen_2x/canva-untitled-MADQ4tkqI2E.jpg"></v-img>
                </div>


                <h3 style="padding-top: 7px; 
                           margin-left: -18px; 
                           margin-right: -18px; 
                           padding-left: 10px; 
                           margin-top: 10px; 
                           padding-bottom: 10px; 
                           margin-bottom: 12px;  
                           padding-top: 10px; 
                           background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
                </h3>

                <div style="padding : 16px;">

                    <p>The United States of America is a Northern American country which governs fifty states. Although currently known as the most powerful nation, it has not always been so. In fact, the original inhabitants of USA were not white
                        people but are rather Native American Indians. The Europeans only came to America in the 16th century after discovering it by accident. Spain, Portugal and France all tried to build colonies in America but it was England that
                        sent the most number of people. Bloody and great wars occurred between the Native Americans, the European settlers and other invaders for many long years. America was named after its discoverer, Amerigo Vespucci, an Italian
                        navigator.
                    </p>


                </div>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

                <div style="padding : 16px;">



                    <li style="list-style-type: none;"><u>Govern(v)</u> - to rule <span class = "korean">통치하다[다스리다], 지배[좌우/통제]하다, 지배하다</span>
                    </li>

                    <li style="list-style-type: none;"><u>Original(adj)</u> - first and true one <span class = "korean">원래[본래]의, 독창적인, 원본의, 원본, 특이한 사람</span>
                    </li>

                    <li style="list-style-type: none;"><u>Inhabitant(n)</u> - resident; person living in a particular place <span class = "korean">주민[서식 동물]</span>
                    </li>

                    <li style="list-style-type: none;"><u>Bloody(adj)</u> - involving much blood and killing <span class = "korean">피비린내 나는, 유혈이 낭자한, 피투성이의</span>
                    </li>

                    <li style="list-style-type: none;"><u>Settler(n)</u> - resident in a new place <span class = "korean">정착민</span>
                    </li>

                    <li style="list-style-type: none;"><u>Invader(n)</u> - someone who wants to enter and obtain a country by force <span class = "korean">침략군[국]</span>
                    </li>


                    <p>Fill in the blanks using the words above.
                    </p>

                    <ol style="margin: 12px;">
                        <li>Japanese ___________ tried to make Korea their own territory.
                        </li>

                        <li>The ________ paintings were kept in a museum in France.
                        </li>

                        <li>I was just a _________ in New York so I tried to make some new friends.
                        </li>

                        <li>To be a successful nation, a good leader must _________ this country.
                        </li>

                        <li>The ____________ of Jeju Island are proud of their culture and place.
                        </li>

                    </ol>

                </div>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

                <div style="padding : 16px;">

                    <ol style="margin: 12px;">
                    <li>What is USA?
                    </li>

                    <li>Who were the original inhabitants of USA?
                    </li>

                    <li>When did the first Europeans come to America?
                    </li>

                    <li>What are the countries that tried to control America?
                    </li>

                    <li>Who was America named after?
                    </li>
                    </ol>


                </div>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

                <div style="padding : 16px;" class = "korean">

                    <p>미국은 50개 주를 관할하는 북아메리카 국가다. 비록 현재 가장 강력한 국가로 알려져 있지만, 항상 그렇지는 않았다. 사실, 미국의 원래 거주자들은 백인이 아니라 인디언 원주민들이었다. 유럽인들은 16세기에야 우연히 그것을 발견한 후에야 미국에 왔다. 스페인, 포르투갈, 프랑스는 모두 미국에 식민지를 건설하려고 했지만 가장 많은 인구를 보낸 곳은 영국이었다. 오랜 세월 동안 원주민들, 유럽 정착민들, 그리고 다른 침략자들 사이에 피비린내 나는 큰 전쟁이 일어났다. America는 발견자인 이탈리아 항해사인 아메리고 베스푸치의 이름을 따서 붙여졌다.
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

<template>
  <v-app>
    <div v-if="$route.name === 'freetalking_beginner'">
      <v-layout>
        <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#5C8D89; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
          <v-list class="pa-1">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Perfect Reading &amp; Talking</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>book</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Table of Contents</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list class="custom-list">
              <v-list-tile>
                <h2>Table of Contents</h2>
              </v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 1)">Ch. 1 Getting to Know</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter1')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter1')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter1')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 2)">Ch. 2 Travelling</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter2')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter2')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter2')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 3)">Ch. 3 Colors</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter3')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter3')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter3')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 4)">Ch. 4 Memories</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter4')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter4')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter4')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 5)">Ch. 5 Music</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter5')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter5')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter5')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 6)">Ch. 6 Food</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter6')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter6')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter6')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 7)">Ch. 7 Family Members</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter7')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter7')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter7')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 8)">Ch. 8 Friendship</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter8')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter8')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter8')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 9)">Ch. 9 The Weather</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter9')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter9')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter9')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 10)">Ch. 10 Favorite Things</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter10')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter10')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter10')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 11)">Ch. 11 Right Now</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter11')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter11')">- Unit 2</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 12)">Ch. 12 Past Happenings</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter12')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter12')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter12')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 13)">Ch. 13 The Future</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter13')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter13')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter13')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 14)">Ch. 14 Nature</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter14')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter14')">- Unit 2</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 15)">Ch. 15 The Fauna</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter15')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter15')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter15')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 16)">Ch. 16 The Flora</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter16')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter16')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter16')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 17)">Ch. 17 Time</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter17')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter17')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter17')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 18)">Ch. 18 Movies</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter18')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter18')">- Unit 2</v-list-tile>   
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 19)">Ch. 19 Pets</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter19')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter19')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter19')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 20)">Ch. 20 Inspiring People</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter20')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter20')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter20')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 21)">Ch. 21 Superheroes</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter21')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter21')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter21')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 22)">Ch. 22 Time Travel</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter22')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter22')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter22')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 23)">Ch. 23 Hobbies</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter23')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter23')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter23')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 24)">Ch. 24 Personal Habits</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter24')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter24')">- Unit 2</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 25)">Ch. 25 Nations of the World</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter25')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter25')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter25')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 26)">Ch. 26 Business</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter26')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter26')">- Unit 2</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 27)">Ch. 27 Jobs and Occupation</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter27')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter27')">- Unit 2</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 28)">Ch. 28 Relaxation</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter28')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter28')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter28')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 29)">Ch. 29 Rights and Duties</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter29')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter29')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter29')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 30)">Ch. 30 Laws</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter30')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter30')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter30')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit1" @click="$router.push('/freetalking/beginner/chapter' + 31)">Ch. 31 Making Acquaintances and Friends</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter31')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter31')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter31')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 32)">Ch. 32 Culture</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter32')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter32')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter32')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 33)">Ch. 33 Neighborhood</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter33')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter33')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter33')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 34)">Ch. 34 My City</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter34')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter34')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter34')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 35)">Ch. 35 Superstition</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter35')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter35')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter35')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 36)">Ch. 36 Learning Foreign Languages</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter36')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter36')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter36')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 37)">Ch. 37 Fashion</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter37')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter37')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter37')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 38)">Ch. 38 Dreams</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter38')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter38')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter38')">- Unit 3</v-list-tile>
              <p>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 39)">Ch. 39 Science and Technology</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter39')">- Unit 1</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter39')">- Unit 2</v-list-tile>
                <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter39')">- Unit 3</v-list-tile>
              </p>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/chapter' + 40)">Ch. 40 Holidays</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit1Chapter40')">- Unit 1</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit2Chapter40')">- Unit 2</v-list-tile>
              <v-list-tile class = "unit" @click="$router.push('/freetalking/beginner/Unit3Chapter40')">- Unit 3</v-list-tile>
            </v-list>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #5C8D89;">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Perfect Reading &amp; Talking</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="speechSlot" #extension>
            <v-container>
              <v-row>
                <v-toolbar-items>
                  <v-col cols="4">
                    <v-icon @click.native="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4">
                    <v-icon @click.native="stopSound()" large color="black">stop</v-icon>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn v-on="on" depressed block text color="#5C8D89">{{speechRateText}}</v-btn>
                      </template>
                      <v-list>
                        <v-list-item>
                          <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                          <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                          <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-toolbar-items>
              </v-row>
            </v-container>
          </template>
          <!--  <v-menu v-model="speechInfo" offset-y offset-x>
          <template v-slot:activator="{ on }"> -->
          <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
          <!--  </template>
          <v-card width="50" height="50">
          hi
        </v-card>
      </v-menu>  -->
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'freetalking_intermediate'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#c38b8b; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Free Talking Step 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/freetalking/intermediate/chapter' + n)" v-for="n in 21" :key="n">Chapter {{n}}</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #c38b8b;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Step 2</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'patterncourse_adultbasic'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#9692af; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Grammar in Pattern</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 1)">[Unit 1] Nouns (1) 명사</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 2)">[Unit 2] Nouns (2) 명사</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 3)">[Unit 3] Much or Many</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 4)">[Unit 4] Wh questions</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 5)">[Unit 5] In, At and On</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 6)">[Unit 6] This and That</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 7)">[Unit 7] Used to</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 8)">[Unit 8] Do you often…?</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 9)">[Unit 9] How long does it take to…?</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 10)">[Unit 10] Since and For</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 11)">[Unit 11] What do you know about…?</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 12)">[Unit 12] I am going to...</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 13)">[Unit 13] If I were… I would… </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 14)">[Unit 14] Must and Should</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 15)">[Unit 15] I would always… </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 16)">[Unit 16] I would rather… </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 17)">[Unit 17] What Does It Mean?</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 18)">[Unit 18] Have decided to</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 19)">[Unit 19] Unless</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultbasic/chapter' + 20)">[Unit 20] Do you think… ?</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #9692af;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Grammar in Pattern</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'patterncourse_adultadv'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#9692af; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Pattern Course Adult Advance Step 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultadv/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #9692af;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Pattern Course Adult Advance Step 1</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'patterncourse_adultint'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#ee8972; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Grammar in Pattern Intermediate</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 1)">[Unit 1] Just My Imagination
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 2)">[Unit 2] Possibilities and the General Truth</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 3)">[Unit 3] What Did She Tell You?
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 4)">[Unit 4] Just Get it Right
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 5)">[Unit 5] Looking Back to the Past
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 6)">[Unit 6] Which is Which?</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 7)">[Unit 7] Choosing the Best</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 8)">[Unit 8] Daily Routine</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 9)">[Unit 9] Everything, Nothing</v-list-tile>
          <v-list-tile @click="$router.push('/pattern-course/adultintermediate/chapter' + 10)">[Unit 10] Everything, Nothing</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #ee8972;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Grammar in Pattern Intermediate</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Business_Step1'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #7690CF; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Business - Step 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 1)">[Unit 1] Meeting People</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 2)">[Unit 2] Saying where you’re from</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 3)">[Unit 3] Meeting People</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 4)">[Unit 4] Telephone numbers and email addresses</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 5)">[Unit 5] Asking about timetables</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 6)">[Unit 6] Buying food</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 7)">[Unit 7] Talking about your job</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 8)">[Unit 8] Describing a company</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 9)">[Unit 9] Talking about daily routines</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 10)">[Unit 10] Coping with difficult language</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 11)">[Unit 11] Coping with Difficult Language</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 12)">[Unit 12] Using the Internet</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 13)">[Unit 13] Asking About Business Facilities</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 14)">[Unit 14] Asking For and Giving Directions.</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 15)">[Unit 15] Talking About Your Home</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 16)">[Unit 16] Talking About Life at Work</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 17)">[Unit 17] Saying What You’re Doing at the Moment</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 18)">[Unit 18] Saying What You Do in Your Spare Time</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 19)">[Unit 19] Arranging To Meet</v-list-tile></p>
       <p><v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + 20)">[Unit 20] Discussing Future Arrangements</v-list-tile></p>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #7690CF;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 1</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Business_Step2'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #ffe75e; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Business - Step 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 1)">[Unit 1] Buying train tickets</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 2)">[Unit 2] Talking about past events</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 3)">[Unit 3] Giving an update</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 4)">[Unit 4] Talking about holidays</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 5)">[Unit 5] Exchanging information by email</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 6)">[Unit 6] Making telephone calls</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 7)">[Unit 7] Talking about the weather and climate 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 8)">[Unit 8] Talking about the weather and climate 2</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 9)">[Unit 9] Making comparisons</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 10)">[Unit 10] Making choices</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 11)">[Unit 11] Checking in for a flight</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 12)">[Unit 12] Making plans 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 13)">[Unit 13] Making plans 2</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 14)">[Unit 14] Describing plans 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 15)">[Unit 15] Describing plans 2 </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 16)">[Unit 16] Staying at a hotel</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 17)">[Unit 17] Discussing how business is going</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 18)">[Unit 18] Discussing sales and orders</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 19)">[Unit 19] Shopping 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + 20)">[Unit 20] Shopping 2</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #ffe75e;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 2</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Business_Step3'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #BF826B; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Business - Step 3</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 1)">[Unit 1] Talking about your job</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 2)">[Unit 2] Talking about products and services</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 3)">[Unit 3] Eating out</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 4)">[Unit 4] Discussing work in progress</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 5)">[Unit 5] Discussing strengths and weaknesses</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 6)">[Unit 6] Talking about your interests</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 7)">[Unit 7] Comparing offers</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 8)">[Unit 8] Discussing strengths and weaknesses 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 9)">[Unit 9] Describing places</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 10)">[Unit 10] Discussing past performance</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 11)">[Unit 11] Discussing past projects</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 12)">[Unit 12] Talking about weekend</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 13)">[Unit 13] Making arrangements</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 14)">[Unit 14] Confirming arrangements</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 15)">[Unit 15] Sightseeing</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 16)">[Unit 16] Forecasting</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 17)">[Unit 17] Discussing aims</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 18)">[Unit 18] Confirming arrangements</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 19)">[Unit 19] Talking about your education and career</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + 20)">[Unit 20] Giving an update</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #BF826B;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 3</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Business_Step4'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #2AB0BF; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Business - Step 4</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 1)">[Unit 1] Discussing interesting experience</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 2)">[Unit 2] Understanding business news</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 3)">[Unit 3] Talking about the economy</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 4)">[Unit 4] Discussing what’s on TV 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 5)">[Unit 5] Discussing what’s on TV 2</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 6)">[Unit 6] Describing a business concept 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 7)">[Unit 7] Describing a business concept 2</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 8)">[Unit 8] Discussing strategies</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 9)">[Unit 9] Using the Internet</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 10)">[Unit 10] Discussing ideas</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 11)">[Unit 11] Making decisions 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 12)">[Unit 12] Making decisions 2</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 13)">[Unit 13] Dealing with problems</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 14)">[Unit 14] Describing how things work</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 15)">[Unit 15] Discussing safety procedures</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 16)">[Unit 16] Using tourist facilities</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 17)">[Unit 17] Attending meetings</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 18)">[Unit 18] Passing on information 1</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 19)">[Unit 19] Passing on information 2</v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + 20)">[Unit 20] Welcoming visitors</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #2AB0BF;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 4</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Dialogue_Books1'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#BC8462; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Daily Dialogues</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 1)">[Unit 1] Hi! What's your name?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 2)">[Unit 2] How do you spell that?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 3)">[Unit 3] What's Seoul like?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 4)">[Unit 4] Are you French?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 5)">[Unit 5] Hi, I’m your new neighbor!</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 6)">[Unit 6] Hello, this is an emergency!</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 7)">[Unit 7] How much is this?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 8)">[Unit 8] At a dentist</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 9)">[Unit 9] Why aren't you working?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 10)">[Unit 10] Busy street</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 11)">[Unit 11] Are you enjoying yourself?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 12)">[Unit 12] She has a beautiful smile
          </v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 13)">[Unit 13] Do you have time now?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 14)">[Unit 14] I have a new girlfriend
          </v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 15)">[Unit 15] My father is an engineer</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 16)">[Unit 16] Does he have a good job?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 17)">[Unit 17] Whose house is that?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 18)">[Unit 18] IThere's a dog
          </v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 19)">[Unit 19] There are some people</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 20)">[Unit 20] How many?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 21)">[Unit 21] What kind of bus is it?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 22)">[Unit 22] Do we have any food?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 23)">[Unit 23] Buying Groceries</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 24)">[Unit 24] Do you like rap?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 25)">[Unit 25] Preferences</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 26)">[Unit 26] I'm going out tonight</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 27)">[Unit 27] What do you want?</v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + 28)">[Unit 28] She wants a new car</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #BC8462;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Daily Dialogues</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4" v-if = "playArrow">
                <v-icon @click="playSound()" class="ml-5" large color="black">play_arrow</v-icon>
              </v-col>
              <v-col cols="4" v-if = "audioPlaying">
                <v-icon @click="pauseSound()" class="ml-5" large color="black">pause</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Dialogue_Books2'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#84a9ac; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Dialogue Books</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel2/chapter' + n)" v-for="n in 21" :key="n">Chapter {{n}}</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #84a9ac;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Daily Dialogues</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'FreeTalking_STEP1'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#D9D9D6; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Free Talking Q&amp;A</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 1)">[Unit 1] Family</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 2)">[Unit 2] Success and Happiness</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 3)">[Unit 3] Pets</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 4)">[Unit 4] Job Interviews</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 5)">[Unit 5] Generation Gap</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 6)">[Unit 6] Holidays</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 7)">[Unit 7] Gender Roles</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 8)">[Unit 8] Television</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 9)">[Unit 9] Diet and Exercise</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 10)">[Unit 10] The Best of Everything</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 11)">[Unit 11] Culture shock</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 12)">[Unit 12] Cars</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 13)">[Unit 13] Communication</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 14)">[Unit 14] Superstitions</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 15)">[Unit 15] Emergency</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 16)">[Unit 16] Conscience</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 17)">[Unit 17] Stress</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 18)">[Unit 18] Sleep</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 19)">[Unit 19] Stock Market</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP1/chapter' + 20)">[Unit 20] Smoking</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #D9D9D6;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Q&amp;A</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4" v-if = "playArrow">
                <v-icon @click="playSound()" class="ml-5" large color="black">play_arrow</v-icon>
              </v-col>
              <v-col cols="4" v-if = "audioPlaying">
                <v-icon @click="pauseSound()" class="ml-5" large color="black">pause</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'FreeTalking_STEP2'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#FFFF9C; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Free Talking Q&amp;A</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 1)">[Unit 1] Growing Old</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 2)">[Unit 2] Progress</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 3)">[Unit 3] Moving Children Out</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 4)">[Unit 4] Advice</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 5)">[Unit 5] Ghosts and the Supernatural</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 6)">[Unit 6] Disasters</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 7)">[Unit 7] Internet Shopping</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 8)">[Unit 8] War and the Military</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 9)">[Unit 9] Studying Abroad</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 10)">[Unit 10] Optimism&amp;Pessimism</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 11)">[Unit 11] Love</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 12)">[Unit 12] Stealing</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 13)">[Unit 13] Pollution and Recycling</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 14)">[Unit 14] Money Management</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 15)">[Unit 15] Divorce</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 16)">[Unit 16] Cheating</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 17)">[Unit 17] Calling in Sick</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 18)">[Unit 18] Retirement</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 19)">[Unit 19] Vacation</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP2/chapter' + 20)">[Unit 20] Forms of Government</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #FFFF9C;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Q&amp;A</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4" v-if = "playArrow">
                <v-icon @click="playSound()" class="ml-5" large color="black">play_arrow</v-icon>
              </v-col>
              <v-col cols="4" v-if = "audioPlaying">
                <v-icon @click="pauseSound()" class="ml-5" large color="black">pause</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'FreeTalking_STEP3'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#95FF9A; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Free Talking Q&amp;A</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 1)">[Unit 1] Favorite Things</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 2)">[Unit 2] Transportation Systems</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 3)">[Unit 3] Proverbs</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 4)">[Unit 4] Modern Life</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 5)">[Unit 5] Hobbies</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 6)">[Unit 6] Disease</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 7)">[Unit 7] Gossip</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 8)">[Unit 8] The Homeless and Welfare</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 9)">[Unit 9] Gambling</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 10)">[Unit 10] Government Spending</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 11)">[Unit 11] Justice Systems</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 12)">[Unit 12] Prejudice and Discrimination</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 13)">[Unit 13] Drugs and Medicine</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 14)">[Unit 14] Fashion</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 15)">[Unit 15] What would you Do If...</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 16)">[Unit 16] Employment Issues</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 17)">[Unit 17] Movies</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 18)">[Unit 18] Excuses and Lies</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 19)">[Unit 19] Professionalism</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP3/chapter' + 20)">[Unit 20] Success</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #95FF9A;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Q&amp;A</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4" v-if = "playArrow">
                <v-icon @click="playSound()" class="ml-5" large color="black">play_arrow</v-icon>
              </v-col>
              <v-col cols="4" v-if = "audioPlaying">
                <v-icon @click="pauseSound()" class="ml-5" large color="black">pause</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'FreeTalking_STEP4'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#FF6E6E; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Free Talking Q&amp;A</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 1)">[Unit 1] Life style</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 2)">[Unit 2] Meals</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 3)">[Unit 3] Special Days</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 4)">[Unit 4] Friends</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 5)">[Unit 5] Jobs</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 6)">[Unit 6] Men&amp;Women</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 7)">[Unit 7] Health</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 8)">[Unit 8] Money</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 9)">[Unit 9] Parents &amp; Children</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 10)">[Unit 10] TV&amp;Movies</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 11)">[Unit 11] Books, Newspapers&amp;Magazines</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 12)">[Unit 12] Sports</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 13)">[Unit 13] Education</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 14)">[Unit 14] Computer&amp;Internet</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 15)">[Unit 15] Insurance</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 16)">[Unit 16] Love</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 17)">[Unit 17] Studying English</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 18)">[Unit 18] Suicide</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 19)">[Unit 19] Lottery</v-list-tile>
          <v-list-tile @click="$router.push('/FreeTalking-QnA/FreeTalking-STEP4/chapter' + 20)">[Unit 20] Science&amp;Religion</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #FF6E6E;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Q&amp;A</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4" v-if = "playArrow">
                <v-icon @click="playSound()" class="ml-5" large color="black">play_arrow</v-icon>
              </v-col>
              <v-col cols="4" v-if = "audioPlaying">
                <v-icon @click="pauseSound()" class="ml-5" large color="black">pause</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'SpeakingPattern_Step1'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#C68FC4; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Speaking Pattern</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 1)">[Unit 1] 내 생각에는 ~인 것 같아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 2)">[Unit 2] ~는 아닌 것 같아.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 3)">[Unit 3] ~를 생각 중이야</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 4)">[Unit 4] ~를 생각하고 있었어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 5)">[Unit 5] ~를 계속 생각해왔어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 6)">[Unit 6] ~라고 생각해?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 7)">[Unit 7] ~인 것 같지 않아?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 8)">[Unit 8] ~에 대해 어떻게 생각해?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 9)">[Unit 9] ~에 대해 어떻게 생각해?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 10)">[Unit 10] ~는 어때?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 11)">[Unit 11] ~를 알아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 12)">[Unit 12] 전부터 ~를 알고 있었어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 13)">[Unit 13] ~인지 아닌지 모르겠어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 14)">[Unit 14] 뭘 ~할지 모르겠어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 15)">[Unit 15] ~에 대해서는 전혀 몰라.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 16)">[Unit 16] ~를 아니?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 17)">[Unit 17] ~가 뭔지 아니?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 18)">[Unit 18] 왜 ~하는지 알아?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 19)">[Unit 19] 언제 ~하는지 알아?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep1/chapter' + 20)">[Unit 20] ~인지 아닌지 아니?</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #C68FC4;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Speaking Pattern</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'SpeakingPattern_Step2'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#C68FC4; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Speaking Pattern</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 1)">[Unit 21] ~가 있어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 2)">[Unit 22] ~가 무척 많아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 3)">[Unit 23] ~가 있었어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 4)">[Unit 24] ~가 있을 거야</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 5)">[Unit 25] 분명 ~가 있을 거야.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 6)">[Unit 26] ~가 없어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 7)">[Unit 27] ~한 건 아무것도 없어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 8)">[Unit 28] ~하는 사람은 아무도 없어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 9)">[Unit 29] ~할 시간이 없어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 10)">[Unit 30] ~할 필요 없어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 11)">[Unit 31] ~가 있어?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 12)">[Unit 32] ~가 좀 있니?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 13)">[Unit 33] ~한 게 있나요?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 14)">[Unit 34] ~하는 사람 있어?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 15)">[Unit 35] ~가 많나요?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 16)">[Unit 36] ~할 방법이 없을까요?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 17)">[Unit 37] ~하는 건 불가능해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 18)">[Unit 38] 내가 ~하는 건 불가능해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 19)">[Unit 39] 더~하는 방법이 있어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep2/chapter' + 20)">[Unit 40] ~하려면 어떤 방법이 가장 좋을까요?</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #C68FC4;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Speaking Pattern</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'SpeakingPattern_Step3'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#C68FC4; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Speaking Pattern</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 1)">[Unit 41] ~하고 싶어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 2)">[Unit 42] 난 단지 ~하고 싶었어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 3)">[Unit 43] ~하고 싶지 않아.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 4)">[Unit 44] ~하고 싶어요</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 5)">[Unit 45] 난 정말 ~하고 싶어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 6)">[Unit 46] ~할래?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 7)">[Unit 47] ~하지 않을래</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 8)">[Unit 48] 뭘~하고 싶어?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 9)">[Unit 49] 왜 ~하고 싶니</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 10)">[Unit 50] 언제 ~하고 싶어?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 11)">[Unit 51] ~어때?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 12)">[Unit 52] ~어때?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 13)">[Unit 53] ~하자</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 14)">[Unit 54] ~하지 말자</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 15)">[Unit 55] ~하는 게 좋겠어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 16)">[Unit 56] ~하지 그래?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 17)">[Unit 57] 우리 ~하는 게 어때요?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 18)">[Unit 58] 우리 ~해야 할지도 모르겠어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 19)">[Unit 59] 우리 우리 ~하자</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep3/chapter' + 20)">[Unit 60] 제가 제가 ~를 제안해도 될까요?</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #C68FC4;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Speaking Pattern</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'SpeakingPattern_Step4'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#C68FC4; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Speaking Pattern</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 1)">[Unit 61] 난 좀 ~해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 2)">[Unit 62] 난 정말~해.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 3)">[Unit 63] 난 완전히 ~해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 4)">[Unit 64] 그건 좀 ~해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 5)">[Unit 65] 이건 완전히 ~야</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 6)">[Unit 66] ~에 만족해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 7)">[Unit 67] ~해서 정말 기뻐</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 8)">[Unit 68] ~해서 좋아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 9)">[Unit 69] 기꺼이 ~할게</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 10)">[Unit 70] ~할 용의가 있어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 11)">[Unit 71] 놀람 표현하기</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 12)">[Unit 72] ~를 믿을 수가 없어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 13)">[Unit 73] 넌 ~를 못 믿을 거야</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 14)">[Unit 74] ~하다니 충격적이었어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 15)">[Unit 75] ~하는 건 당연해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 16)">[Unit 76] 난 ~가 무서워</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 17)">[Unit 77] 난 ~가 걱정돼</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 18)">[Unit 78] ~때문에 긴장돼</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 19)">[Unit 79] ~하다니 실망이야</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep4/chapter' + 20)">[Unit 80] ~해서 참 답답해</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #C68FC4;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Speaking Pattern</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'SpeakingPattern_Step5'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#C68FC4; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Speaking Pattern</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 1)">[Unit 81] ~를 좋아하니?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 2)">[Unit 82] 난 ~를 좋아해</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 3)">[Unit 83] 난 ~에 빠졌어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 4)">[Unit 84] 난 ~를 좋아하지 않아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 5)">[Unit 85] 난 ~하는 방식이 마음에 안 들어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 6)">[Unit 86] ~할 때가 좋아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 7)">[Unit 87] ~하면 정말 싫어</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 8)">[Unit 88] ~에 관심 있어요?</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 9)">[Unit 89] 좋아하는 것 말하기</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 10)">[Unit 90] ~는 신경 안 써</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 11)">[Unit 91] 네~가 멋진데</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 12)">[Unit 92] 네가 ~하는 방식이 좋아</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 13)">[Unit 93] 넌 참~하구나</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 14)">[Unit 94] 넌 ~를 잘하는구나</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 15)">[Unit 95] 넌 ~감각이 뛰어나구나</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 16)">[Unit 96] ~해서 고마워</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 17)">[Unit 97] ~에 감사드려요.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 18)">[Unit 98] ~해주신다면 정말 감사하겠어요.</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 19)">[Unit 99] ~해주시니 정말 ~하세요</v-list-tile>
          <v-list-tile @click="$router.push('/SpeakingPattern/SpeakingPatternStep5/chapter' + 20)">[Unit 100] ~하다니 정말 고마워</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #C68FC4;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Speaking Pattern</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Freetalking_Description'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#ff6363; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Freetalking - Description</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 1)">[Unit 1] Family</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 2)">[Unit 2] Zoo</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 3)">[Unit 3] Fruits</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 4)">[Unit 4] Mountain</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 5)">[Unit 5] Building</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 6)">[Unit 6] Beach</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 7)">[Unit 7] Subway</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 8)">[Unit 8] At the office</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 9)">[Unit 9] Business meeting</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 10)">[Unit 10] Military Training</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 11)">[Unit 11] Fashion Runway</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 12)">[Unit 12] Electronic gadget</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 13)">[Unit 13] Apartment</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 14)">[Unit 14] Amusement Park</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 15)">[Unit 15] Shopping mall</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 16)">[Unit 16] Business Establishment</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 17)">[Unit 17] Humanoid Robot</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 18)">[Unit 18] Scuba diving</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 19)">[Unit 19] South Africa</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 20)">[Unit 20] Working People</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 21)">[Unit 21] Friends</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 22)">[Unit 22] University Students</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 23)">[Unit 23] Babies</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 24)">[Unit 24] Rice</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 25)">[Unit 25] Credit and Debit Card</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 26)">[Unit 26] Typical Weather</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 27)">[Unit 27] Korean Old and New House</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 28)">[Unit 28] Women in Shape</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 29)">[Unit 29] Currency</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 30)">[Unit 30] Video Game</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 31)">[Unit 31] Karaoke</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 32)">[Unit 32] Online English Study</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 33)">[Unit 33] Risk of Smoking</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 34)">[Unit 34] Futuristic Car</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 35)">[Unit 35] Submarine Volcano</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 36)">[Unit 36] Skyrocketed Heels</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 37)">[Unit 37] Gold Investment</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 38)">[Unit 38] Seafoood</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 39)">[Unit 39] The Enemy's Affection</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 40)">[Unit 40] Rice</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 41)">[Unit 41] Korean Girls</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 42)">[Unit 42] Golf Course</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 43)">[Unit 43] Beauty Pageant</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 44)">[Unit 44] The Beach House</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 45)">[Unit 45] The Hero</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 46)">[Unit 46] The Palace Guard</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 47)">[Unit 47] Crustacean Family</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 48)">[Unit 48] The Red Carpet</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 49)">[Unit 49] Bridges in the World</v-list-tile>
          <v-list-tile @click="$router.push('/Freetalking-Description/Freetalking-Description-Level1/chapter' + 50)">[Unit 50] An Italian Restaurant</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #ff6363;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Freetalking - Description</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'FreeTalking_Opinion'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#F76830; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Free Talking - Opinion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list" style = "line-height: 1.6;">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 1)">[Unit 1] Should I Make Small Talk First?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 2)">[Unit 2] Should We Look For Chances To Compliment Others?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 3)">[Unit 3] Should We Push People While Waiting In Line?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 4)">[Unit 4] Should We Hold The Door Open For Everyone?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 5)">[Unit 5] Should We Respond To Insults?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 6)">[Unit 6] Should We Tell On Others?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 7)">[Unit 7] Should we participate in volunteer work?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 8)">[Unit 8] Should We Build Military Robots?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 9)">[Unit 9] Is Majority Vote Really The Best Way To Make Decision?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 10)">[Unit 10] What is more important? Talent or Hard Work?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 11)">[Unit 11] Will Artificial Intelligence Technology Make Our Lives Better Or Worse??</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 12)">[Unit 12] Should We Allow Euthanasia?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 13)">[Unit 13] Should Computers Replace Teachers?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 14)">[Unit 14] Are Aliens Real?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 15)">[Unit 15] Should Companies Use Animals To Test New Products?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 16)">[Unit 16] Do Smartphones Make People Less Sociable?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 17)">[Unit 17] Do Schools Really Prepare Students For A Successful Life?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 18)">[Unit 18] Can Money Make Everyone Happy?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 19)">[Unit 19] Should a Celebrity's Private Life Be Open To The Public?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 20)">[Unit 20] Is The Korean Age System More Useful Than The Regular Age System?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 21)">[Unit 21] Should Recycling Be Mandatory?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 22)">[Unit 22] Should Plastic Bags Be Banned ?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 23)">[Unit 23] Are Multivitamins Important for Good Health?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 24)">[Unit 24] Is It Okay to Raise Exotic Animals as Pets?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 25)">[Unit 25] Should Elderly People Be Forced to Retire?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 26)">[Unit 26] Do Celebrities Deserve Special Treatment?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 27)">[Unit 27] Should Kids Be Allowed to Vote for the President?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 28)">[Unit 28] Is It Okay for Students to Get Their Ears Pierced?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 29)">[Unit 29] Should People Bathe Every Day?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 30)">[Unit 30] Is Overexertion Necessary for Success?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 31)">[Unit 31] Is There Such a Thing as Being Too Nice?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 32)">[Unit 32] Is Physiognomy Accurate?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 33)">[Unit 33] Is Astrology Accurate?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 34)">[Unit 34] Is Humility a Virtue?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 35)">[Unit 35] Is Feng Shui Accurate?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 36)">[Unit 36] Should Posthumous Works Be Allowed?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 37)">[Unit 37] Does Veganism Really Help the Environment?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 38)">[Unit 38] Should Korea Celebrate Halloween?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 39)">[Unit 39] Are Dreams Important in Our Daily Lives?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 40)">[Unit 40] Mobile Games and Video Games</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 41)">[Unit 41] Is Writing in Print Better Than Cursive?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 42)">[Unit 42] Should a Single Universal Language Exist?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 43)">[Unit 43] Are Comics Better Than Animations?</v-list-tile></p> 
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 44)">[Unit 44] Does Cold Weather Cause Colds?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 45)">[Unit 45] Will Flying Cars Ever Exist?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 46)">[Unit 46] How Important Is Marriage in Today’s Society?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 47)">[Unit 47] Are Cough Drops Unhealthy?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 48)">[Unit 48] Should Christmas Presents Be Mandatory?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 49)">[Unit 49] Are Hand Sanitizers Unhealthy?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 50)">[Unit 50] Natural Talent Versus Hard Work</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 51)">[Unit 51] Short Hair Versus Long Hair</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 52)">[Unit 52] 2D Animation Versus 3D Animation</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 53)">[Unit 53] DIY Versus Professional Services</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 54)">[Unit 54] Are Mukbangs Dangerous?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 55)">[Unit 55] Spontaneous Action Versus Planned Action</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 56)">[Unit 56] Fruits Versus Vegetables</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 57)">[Unit 57] Fresh Food Versus Frozen Food</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 58)">[Unit 58] Is Eating in Public Rude?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 59)">[Unit 59] Are Regular Visits to the Dentist Necessary?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 60)">[Unit 60] Plays Versus Musicals</v-list-tile></p> 
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 61)">[Unit 61] Pianos Versus Guitars</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 62)">[Unit 62] Is It Okay to Tell White Lies?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 63)">[Unit 63] Savory Food Versus Sweet Food</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 64)">[Unit 64] Apartments Versus Houses</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 65)">[Unit 65] Morning Exercise Versus Evening Exercise</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 66)">[Unit 66] Audio Calling Versus Video Calling</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 67)">[Unit 67] Warm Drinks Versus Cold Drinks</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 68)">[Unit 68] Savory Popcorn Versus Sweet Popcorn</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 69)">[Unit 69] Rain Versus Snow</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 70)">[Unit 70] E-Mails Versus Text Messages</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 71)">[Unit 71] Is Sighing Rude?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 72)">[Unit 72] Modern Versus Vintage</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 73)">[Unit 73] Natural Hair Versus Dyed Hair</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 74)">[Unit 74] Live Broadcast Versus Pre-Filmed Broadcast</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + 75)">[Unit 75] Raw Vegetables Versus Cooked Vegetables</v-list-tile></p>     
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #F76830;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking - Opinion</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4" v-if = "playArrow">
                <v-icon @click="playSound()" class="ml-5" large color="black">play_arrow</v-icon>
              </v-col>
              <v-col cols="4" v-if = "audioPlaying">
                <v-icon @click="pauseSound()" class="ml-5" large color="black">pause</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Level_test'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#F76830; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Level Test</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/LevelTest/Adult/AdultBeginner' + 1)">[Unit 1] Family</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #F76830;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Level Test</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Interview_Step1'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#de7119; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Interview English</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 1)">[Unit 1] Tell me about yourself</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 2)">[Unit 2] What is your major?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 3)">[Unit 3] What made you choose your university?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 4)">[Unit 4] What are your work experiences?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 5)">[Unit 5] What interests you about this job?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 6)">[Unit 6] What can you do for this company?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 7)">[Unit 7] What interest you about this job?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 8)">[Unit 8] How long do you expect to remain employed with this company?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 9)">[Unit 9] Do you prefer to work independently or on a team?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 10)">[Unit 10] What applicable attributes/experiences do you have?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 11)">[Unit 11] What is your greatest strength?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 12)">[Unit 12] What type of work environment do you prefer?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 13)">[Unit 13] What are your salary expectations?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 14)">[Unit 14] Are you a self motivator?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 15)">[Unit 15] Where do you see yourself five years from now?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 16)">[Unit 16] What are your goals for the next three or five years?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 17)">[Unit 17] What are you passionate about?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 18)">[Unit 18] What has been the greatest disappointment in your life?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 19)">[Unit 19] What will you do if you don’t get this position?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 20)">[Unit 20] What did you like or dislike about your previous job?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 21)">[Unit 21] What challenges are you looking for?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 22)">[Unit 22] What is your philosophy towards work?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 23)">[Unit 23] What is more important to you : money or work?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 24)">[Unit 24] What do your previous co-workers say about you?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 25)">[Unit 25] What motivates you to do your best on the job?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 26)">[Unit 26] What qualities do you look for in a boss?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 27)">[Unit 27] How would you know you were successful on this job?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 28)">[Unit 28] What have you learned from mistakes on the job?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 29)">[Unit 29] If you were hiring a person for this job, what would you look for?</v-list-tile></p>
          <p><v-list-tile @click="$router.push('/Interview-English/Interview-EnglishStep1/chapter' + 30)">[Unit 30] How do you handle criticism?</v-list-tile></p>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #de7119;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Interview English</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'Travel_English'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#0779e4; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Travel English</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/TravelEnglish/TravelEnglish1/chapter' + 1)">[Unit 1] On the Plane</v-list-tile>
          <v-list-tile @click="$router.push('/TravelEnglish/TravelEnglish1/chapter' + 2)">[Unit 2] Finding Seats</v-list-tile>
          <v-list-tile @click="$router.push('/TravelEnglish/TravelEnglish1/chapter' + 3)">[Unit 3] In-flight Meal</v-list-tile>
          <v-list-tile @click="$router.push('/TravelEnglish/TravelEnglish1/chapter' + 4)">[Unit 4] In-flight Service</v-list-tile>
          <v-list-tile @click="$router.push('/TravelEnglish/TravelEnglish1/chapter' + 5)">[Unit 5] At The Airport</v-list-tile>
          <v-list-tile @click="$router.push('/TravelEnglish/TravelEnglish1/chapter' + 6)">[Unit 6] Immigration Counter</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #0779e4;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Travel English</v-toolbar-title>
      <img src="https://img.icons8.com/ios-filled/50/000000/airplane-take-off.png" style="max-width: 30%; display:block; height: 55%;"/>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<div v-if="$route.name === 'IT_Issues'">
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#59CCD9; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>IT Issues</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/IT-Issues/IT-Issues1/chapter' + 1)">[Unit 1] Sharpening Blurry Faces with AI</v-list-tile>
          <v-list-tile @click="$router.push('/IT-Issues/IT-Issues1/chapter' + 2)">[Unit 2] Artificial Brain Synapses</v-list-tile>
          <v-list-tile @click="$router.push('/IT-Issues/IT-Issues1/chapter' + 3)">[Unit 3] Big Data, Big Impact</v-list-tile>
          <v-list-tile @click="$router.push('/IT-Issues/IT-Issues1/chapter' + 4)">[Unit 4] The Future of Big Data</v-list-tile>
          <v-list-tile @click="$router.push('/IT-Issues/IT-Issues1/chapter' + 5)">[Unit 5] Benefits of IoT Data Analytics</v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #59CCD9;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">IT Issues</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="playSound()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSound()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>
      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>
          </v-toolbar-title>
        </template>
        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="20" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-layout>
</div>
<router-view :fontSize="fontSize"></router-view>
</v-app>
</template>

<script>
import Speech from 'speak-tts'
import Vue from 'vue'
export default {
  data() {
    return {
      drawer: null,
      pathname: window.location.pathname,
      items: [{
        title: 'Home',
        icon: 'dashboard'
      },
      {
        title: 'About',
        icon: 'question_answer'
      }
    ],
    mini: false,
    right: null,
    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: false,
    },
    icon: 'play_arrow',
    speech: new Speech(),
    stop_button: false,
    selectedString: '',
    speechRateText: '1x',
    speechRate: 1,
    fontSize: 20,
    speechInfo: true,
    speechSlot: false,
    playArrow: true,
    audioPlaying: false,
    audio: '',
  }
},
watch: {
  fontSize(current, old) {
  }
},
mounted() {
  this.speech.cancel()
},
methods: {
  playSound() {
    console.log(this.audio.paused, 'hi')
    if(this.audio.paused && !this.audioPlaying){
      this.audio.play(); 
      this.playArrow = false
    }else{
        if(this.$router.history.current.fullPath.indexOf('/FreeTalking-QnA/FreeTalking-STEP1') != -1){
      for(var i = 0; i < 21; i++){
        if(this.$router.history.current.fullPath === '/FreeTalking-QnA/FreeTalking-STEP1/chapter' + i){
          this.audio = new Audio('../../audio/FreeTalkingQ&A/White/Unit' +i+ '.mp3')
          this.icon = "pause";
          this.audioPlaying = true;
          this.playArrow = false;
        }
      }
    }
    if(this.$router.history.current.fullPath.indexOf('/FreeTalking-QnA/FreeTalking-STEP2') != -1){
      for(var i = 0; i < 21; i++){
        if(this.$router.history.current.fullPath === '/FreeTalking-QnA/FreeTalking-STEP2/chapter' + i){
          this.audio = new Audio('../../audio/FreeTalkingQ&A/Yellow/Unit' +i+ '.mp3')
          this.icon = "pause";
          this.audioPlaying = true;
          this.playArrow = false;
        }
      }
    }
    if(this.$router.history.current.fullPath.indexOf('/FreeTalking-QnA/FreeTalking-STEP3') != -1){
      for(var i = 0; i < 21; i++){
        if(this.$router.history.current.fullPath === '/FreeTalking-QnA/FreeTalking-STEP3/chapter' + i){
          this.audio = new Audio('../../audio/FreeTalkingQ&A/Green/Unit' +i+ '.mp3')
          this.icon = "pause";
          this.audioPlaying = true;
          this.playArrow = false;
        }
      }
    }
    if(this.$router.history.current.fullPath.indexOf('/FreeTalking-QnA/FreeTalking-STEP4') != -1){
      for(var i = 0; i < 21; i++){
        if(this.$router.history.current.fullPath === '/FreeTalking-QnA/FreeTalking-STEP4/chapter' + i){
          this.audio = new Audio('../../audio/FreeTalkingQ&A/Red/Unit' +i+ '.mp3')
          this.icon = "pause";
          this.audioPlaying = true;
          this.playArrow = false;
        }
      }
    }
    if(this.$router.history.current.fullPath.indexOf('/DialogueBooks/DialogueLevel1') != -1){
      for(var i = 0; i < 21; i++){
        if(this.$router.history.current.fullPath === '/DialogueBooks/DialogueLevel1/chapter' + i){
          this.audio = new Audio('../../audio/DialogueBooks/White/Unit' +i+ '.mp3')
          this.icon = "pause";
          this.audioPlaying = true;
          this.playArrow = false;
        }
      }
    }
    if(this.$router.history.current.fullPath.indexOf('/FreeTalkingOpinion/FreeTalkingOpinion1') != -1){
      for(var i = 0; i < 76; i++){
        if(this.$router.history.current.fullPath === '/FreeTalkingOpinion/FreeTalkingOpinion1/chapter' + i){
          this.audio = new Audio('../../audio/FreeTalking-Opinion/Unit' +i+ '.mp3')
          this.icon = "pause";
          this.audioPlaying = true;
          this.playArrow = false;
        }
      }
    }


    }
    this.audio.play()
    this.audioPlaying = true
  },

  pauseSound() {
    this.audio.pause()
    this.audioPlaying = false;
    this.playArrow = true;
  },

  stopSound() {
    console.log('hello')
    this.audio.pause()
    this.audio.currentTime = 0;
    this.playArrow = true;
    this.audioPlaying = false;
  },

  
  
 
  textToSpeech() {
    var string = this.$el.innerText
    var string2
    if(this.speechRate == 0.75 || this.speechRate == 1.25 ){
      string2 = string.slice(528, string.length).trim().replace(/\s/g,' ')
    }else if(this.speechRate == 1){
      string2 = string.slice(526, string.length).trim().replace(/\s/g,' ')
    }
    this.speech.init({
      volume: 1,
      lang: "en-US",
      rate: this.speechRate,
      pitch: 1,
    }).then((data) => {
    }).catch(e => {})
    this.speech.setVoice('Google US English')
    this.speech.speak({
      text: string2.trim()
    }).then(() => {
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred :", e)
    })
    if (this.speech.speaking()) {
      document.addEventListener('mouseup', event => {
        this.selectedString = event.target.innerText
        console.log(this.selectedString != "play_arrow" && this.selectedString != "pause" && this.selectedString != "0.5X" && this.selectedString != "1X" && this.selectedString != "1.5X")
        if(this.selectedString != "play_arrow" && this.selectedString != "pause" && this.selectedString != "0.5X" && this.selectedString != "1X" && this.selectedString != "1.5X" && this.selectedString != "0.5x" && this.selectedString != "1x" && this.selectedString != "1.5x"){
          this.speech.cancel();
          this.selectedTextToSpeech()
        }
        if(this.selectedString == "play_arrow"){
          console.log('resume')
          this.speech.resume()
          this.icon = "pause";
        }else if(this.selectedString == "pause"){
          console.log('pause')
          this.speech.pause()
          this.icon = "play_arrow";
        }
      })
      Vue.set(this.$data, 'icon', 'pause')
    }else{
      if(this.selectedString == "pause"){
        this.speech.pause()
        this.icon = "play_arrow"
      }else if(this.selectedString == "play_arrow"){
        this.speech.resume()
        this.icon = "pause"
      }
    }
  },
  stopSpeech() {
    Vue.set(this.$data, 'icon', 'play_arrow')
    this.speech.cancel()
  },
  selectedTextToSpeech() {
    if (!this.speech.speaking()) {
      this.speech.init({
        volume: 1,
        lang: "en-US",
        rate: this.speechRate,
        pitch: 1,
      }).then((data) => {}).catch(e => {})
      console.log(this.selectedString)
      this.speech.speak({
        text: this.selectedString,
        listeners: {
          onend: () => {
            Vue.set(this.$data, 'icon', 'play_arrow')
          }
        }
      }).then(() => {
        console.log("Success !")
      }).catch(e => {
        console.error("An error occurred :", e)
      })
      /*
      if(this.selectedString == "pause"){
      this.speech.pause()
      this.icon = "play_arrow"
    }else if(this.selectedString == "play_arrow"){
    this.speech.resume()
    this.icon = "pause"
  }*/
  Vue.set(this.$data, 'icon', 'pause')
}
},
changeSpeechRate(selected){
  this.speechRateText = selected.target.innerText
  if(selected.target.innerText == "0.5x"){
    this.speech.setRate(0.75)
    this.speechRate = 0.75
  }
  if(selected.target.innerText == "1x"){
    this.speech.setRate(1)
    this.speechRate = 1
  }
  if(selected.target.innerText == "1.5x"){
    this.speech.setRate(1.25)
    this.speechRate = 1.25
  }
}
}
}
</script>
<style>
.custom-list {
  max-height: 100vh;
  overflow-y: scroll;
}
.unit a{
  height: 20px;

}

.unit1 a{
  height: 35px;

}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #666666;
}
::-webkit-scrollbar-thumb:active {
  background: #666666;
}
::-webkit-scrollbar-track {
  background: #f5f5f5;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track:active {
  background: #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}


</style>
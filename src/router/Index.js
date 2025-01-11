// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router';

/* MAIN PAGES */

import HomePage from "@/views/main/Home.vue";
import CreditsPage from "@/views/main/Credits.vue";
import DevlogsPage from "@/views/main/Devlogs.vue";

/* Mirage DEVLOG PAGES */

import DevlogOne from "@/views/devlogs/1.vue";
import DevlogTwo from "@/views/devlogs/2.vue";
import DevlogThree from "@/views/devlogs/3.vue";
import DevlogFour from "@/views/devlogs/4.vue";
import DevlogFive from "@/views/devlogs/5.vue";
import DevlogSix from "@/views/devlogs/6.vue";
import DevlogSeven from "@/views/devlogs/7.vue";
import DevlogEight from "@/views/devlogs/8.vue";
import DevlogNine from "@/views/devlogs/9.vue";
import DevlogTen from "@/views/devlogs/10.vue";
import DevlogEleven from "@/views/devlogs/11.vue";
import DevlogTwelve from "@/views/devlogs/12.vue";
import DevlogThirteen from "@/views/devlogs/13.vue"

const routes = [

  /* MAIN PAGES */

  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/credits",
    name: "Credits",
    component: CreditsPage
  },
  {
    path: "/devlogs",
    name: "DevlogsPage",
    component: DevlogsPage
  },
  {
    path: "/Devlogs",
    name: "DevlogsPage",
    component: DevlogsPage
  },
  {
    path: "/devlogs/1",
    name: "Devlog1",
    component: DevlogOne
  },
  {
    path: "/Devlogs/1",
    name: "Devlog1",
    component: DevlogOne
  },
  {
    path: "/devlogs/2",
    name: "Devlog2",
    component: DevlogTwo
  },
  {
    path: "/Devlogs/2",
    name: "Devlog2",
    component: DevlogTwo
  },
  {
    path: "/devlogs/3",
    name: "Devlog3",
    component: DevlogThree
  },
  {
    path: "/Devlogs/3",
    name: "Devlog3",
    component: DevlogThree
  },
  {
    path: "/devlogs/4",
    name: "Devlog4",
    component: DevlogFour
  },
  {
    path: "/Devlogs/4",
    name: "Devlog4",
    component: DevlogFour
  },
  {
    path: "/devlogs/5",
    name: "Devlog5",
    component: DevlogFive
  },
  {
    path: "/Devlogs/5",
    name: "Devlog5",
    component: DevlogFive
  },
  {
    path: "/devlogs/6",
    name: "Devlog6",
    component: DevlogSix
  },
  {
    path: "/devlogs/6",
    name: "Devlog6",
    component: DevlogSix
  },
  {
    path: "/devlogs/7",
    name: "Devlog7",
    component: DevlogSeven
  },
  {
    path: "/Devlogs/7",
    name: "Devlog7",
    component: DevlogSeven
  },
  {
    path: "/devlogs/8",
    name: "Devlog8",
    component: DevlogEight
  },
  {
    path: "/Devlogs/8",
    name: "Devlog8",
    component: DevlogEight
  },
  {
    path: "/devlogs/9",
    name: "Devlog9",
    component: DevlogNine
  },
  {
    path: "/Devlogs/9",
    name: "Devlog9",
    component: DevlogNine
  },
  {
    path: "/devlogs/10",
    name: "Devlog10",
    component: DevlogTen
  },
  {
    path: "/Devlogs/10",
    name: "Devlog10",
    component: DevlogTen
  },
  {
    path: "/devlogs/11",
    name: "Devlog11",
    component: DevlogEleven
  },
  {
    path: "/Devlogs/11",
    name: "Devlog11",
    component: DevlogEleven
  },
  {
    path: "/devlogs/12",
    name: "Devlog12",
    component: DevlogTwelve
  },
  {
    path: "/Devlogs/12",
    name: "Devlog12",
    component: DevlogTwelve
  },
  {
    path: "/devlogs/13",
    name: "Devlog13",
    component: DevlogThirteen
  },
  {
    path: "/Devlogs/13",
    name: "Devlog13",
    component: DevlogThirteen
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  beforeEach: (to, from) => {
    console.log(`Navigating from ${from.path} to ${to.path}`);
  }
});

export default router;

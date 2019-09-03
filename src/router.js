import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import ContactUs from "./views/ContactUs.vue";
import MeetTheTeam from "./views/MeetTheTeam.vue";
import PastEvents from "./views/PastEvents.vue";
import OurStory from "./views/OurStory.vue";
import SponsorUs from "./views/SponsorUs.vue";
import Upcoming from "./views/Upcoming.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/contactUs",
      name: "contactUs",
      components: {
        header: AppHeader,
        default: ContactUs,
        footer: AppFooter
      }
    },
    {
      path: "/meetTheTeam",
      name: "meetTheTeam",
      components: {
        header: AppHeader,
        default: MeetTheTeam,
        footer: AppFooter
      }
    },
    {
      path: "/ourStory",
      name: "ourStory",
      components: {
        header: AppHeader,
        default: OurStory,
        footer: AppFooter
      }
    },
    {
      path: "/pastEvents",
      name: "pastEvents",
      components: {
        header: AppHeader,
        default: PastEvents,
        footer: AppFooter
      }
    },
    {
      path: "/sponsorUs",
      name: "sponsorUs",
      components: {
        header: AppHeader,
        default: SponsorUs,
        footer: AppFooter
      }
    },
    {
      path: "/upcoming",
      name: "upcoming",
      components: {
        header: AppHeader,
        default: Upcoming,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

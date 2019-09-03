<template>
    <div>
        <hero></hero>
        <mentor-section></mentor-section>
        <carousel></carousel>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import MentorSection from "./components/MentorSection";

export default {
  name: "components",
  components: {
    Hero,
    Carousel,
    MentorSection
  }
};
</script>

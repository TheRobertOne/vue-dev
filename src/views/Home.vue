<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import share from "@/common/js/share.js";
share();

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

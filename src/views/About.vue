<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import share from "@/common/js/share";
share();

export default {
  name: "About",
  created: function() {
    // axios.get("/user/fuck");
  }
};
</script>

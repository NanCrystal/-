<template>
  <div class="hello">hello</div>
</template>

<script>
function testable(target) {
  console.log("testable", target);
}

@testable
class MyTestableClass {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

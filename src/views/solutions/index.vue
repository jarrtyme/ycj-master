<template>
  <div>
    <div class="binnerimg">
      <img class="binner" src="../../assets/imgs/06.jpg" />
    </div>

    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
    <h1>fanan</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.binnerimg {
  width: 100%;
  height: 50vh;
  min-height: 300px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh;
    min-height: 250px;
  }

  @media (min-width: 769px) {
    height: 55vh;
    min-height: 400px;
  }

  .binner {
    object-fit: cover;
  }
}

h1 {
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
}
</style>

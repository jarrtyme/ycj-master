<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <i></i>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-family: 'alimmff', sans-serif;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 24px;

  h2 {
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
  }

  i {
    width: 120px;
    display: block;
    height: 2px;
    margin: 10px auto;
    background: #0463b5;

    @media (max-width: 767px) {
      width: 80px;
      margin: 0.5rem auto;
    }

    @media (min-width: 769px) {
      width: 120px;
      margin: 1rem auto;
    }
  }

  h3 {
    color: rgba(0, 0, 0, 0.5);
    line-height: 20px;
    font-size: 20px;
    margin: 0;
    text-align: center;
  }
}
</style>

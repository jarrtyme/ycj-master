<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <i></i>
    <h4>{{ subtitle }}</h4>
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
    background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);

    @media (max-width: 768px) {
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
  h2 {
    background: linear-gradient(to top, #f43b47 0%, #453a94 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h4 {
    text-align: right;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.9));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.9rem !important;
    @media (min-width: 769px) {
      text-align: center;
      font-size: 1.2rem !important;
    }
  }
}
</style>

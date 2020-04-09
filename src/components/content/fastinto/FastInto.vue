<template>
  <div class="fast-into">
    <div class="fast-into-main wrap">
      <div class="city-enter">城市快捷入口</div>
      <div class="city-list">
        <ul>
          <li><a>热门</a></li>
          <li><a>A</a></li>
          <li><a>B</a></li>
          <li><a>C</a></li>
          <li><a>D</a></li>
          <li><a>E</a></li>
          <li><a>F</a></li>
          <li><a>G</a></li>
          <li><a>H</a></li>
          <li><a>I</a></li>
          <li><a>J</a></li>
          <li><a>K</a></li>
          <li><a>L</a></li>
          <li><a>M</a></li>
          <li><a>N</a></li>
          <li><a>O</a></li>
          <li><a>P</a></li>
          <li><a>Q</a></li>
          <li><a>R</a></li>
          <li><a>S</a></li>
          <li><a>T</a></li>
          <li><a>U</a></li>
          <li><a>V</a></li>
          <li><a>W</a></li>
          <li><a>X</a></li>
          <li><a>Y</a></li>
          <li><a>Z</a></li>
        </ul>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
        <div class="city"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FastInto'
  }
</script>

<style scoped>
  .fast-into {
    height: 320px;
    width: 100%;
    color: #6985a5;
    background-color: #1b2b3b;
  }
  .fast-into-main {
    height: 100%;
    position: relative;
  }
  .city-enter {
    font-size: 20px;
    width: 140px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 43px;
    left: 50%;
    margin-left: -70px;
    text-align: center;
    background-color: #1b2b3b;
  }
  .city-list {
    height: 190px;
    padding: 60px 0;
    background-color: lawngreen;
  }
  .city-list ul {
    display: flex;
    padding: 50px 0;
    border: 1px solid #32414f;
  }
  .city-list ul li {
    text-align: center;
    cursor: pointer;
    flex: 1;
  }
  .city-list ul li:hover {
    border-bottom: 2px solid #fabe00;
    color: #fabe00;
  }
</style>
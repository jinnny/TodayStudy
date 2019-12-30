<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart/>
    <line-chart/>
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
export default {
  components: {
    BarChart,
    LineChart
  },
  data() {
    return {
      chartDataSet: [],
    }
  },
  created() {
  }
}
</script>

<style>

</style>

<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calender</h1>
    <section class="mx-2 flex font-bold justify-between">
      <h2 class="px-2">{{currentMonthName}}</h2>
      <h2 class="px-2">{{currentYear}}</h2>
    </section>
    <section class="flex">
      <p class="p-1 text-center" style="width:14.28%" v-for="day in days" :key="day">{{day}}</p>
    </section>
    <section class="flex flex-wrap">
      <p class="p-1 text-center" style="width:14.28%" v-for="num in startDay()" :key="num"></p>
      <p class="p-1 text-center" :class="currentDateClass(num) ? 'text-green-500' : ''" style="width:14.28%" v-for="num in daysInMonth()" :key="num">{{num}}</p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 border rounded" @click="prev">Prev</button>
      <button class="px-2 border rounded" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],

    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth+1,0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth == 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      return new Date(this.currentYear, this.currentMonth, num).toDateString() === new Date().toDateString();
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear,this.currentMonth).toLocaleString('default', {month: "long"})
    }
  }
}
</script>

<style>

</style>
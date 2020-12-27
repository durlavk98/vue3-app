<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-2xl my-2">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border text-center">
        <textarea ref="markdownTextArea" class="w-full h-full" :value="text" @input="update"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100 text-center" v-html="markedText">
        
      </article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
//import debounce from '../utilities/mixins/debounce';
import useDebounce from "../utilities/composition/useDebounce";
export default {
  //mixins: [debounce],
  data() {
    return {
      text: '',
      debounce: '',
    }
  },
  computed: {
    markedText() {
      return marked(this.text);
    }
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value;
      };
      
      this.debounce(task, 500);
    },
  },
  mounted() {
    const {debounce} = useDebounce();
    this.debounce = debounce;
    this.$refs.markdownTextArea.focus();
  }
}
</script>

<style>

</style>
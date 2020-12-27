<template>
  <section class="w-full flex">
    <div class="m-auto">
      <div class="mt-10">
        <div class="text-center w-full">
          <h1 class="text-2xl mt-4">tensorflow object detection</h1>
          <small>Works only on <a class="text-blue-500" href="https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts" target="_blank"> these </a>objects.</small>
        </div>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center">
          <button
          v-if="!isStreaming"
          @click="openCamera"
          class="w-32 rounded shadow-md p-2 border bg-gradient-to-r from-green-200 to-blue-200">
          Open Camera
          </button>  
          <div v-else class="flex justify-between">
            <button
              @click="closeCamera"
              class="w-32 rounded shadow-md p-2 border bg-gradient-to-r from-red-200 to-blue-200">
              Close Camera
            </button>
            <button
              @click="snapshot"
              class="w-32 rounded shadow-md p-2 border bg-gradient-to-r from-red-200 to-blue-200">
              Snapshot
            </button>
          </div>
          </div>
          <video ref="videoRef" autoplay width="100"></video>
        </div>
        <div class="flex justify-center flex-wrap">
           <img 
           ref="imgRef" 
           crossorigin="anonymous" 
           src="https://images.unsplash.com/photo-1567581935884-3349723552ca" 
           alt="image" width="200" />
           
           <div class="w-full text-center my-4">
              <button 
              type="submit" @click="detect"
              class="w-48 rounded shadow-md p-2 border bg-gradient-to-r from-green-200 to-blue-200">
                <span v-if="!isLoading">Detect Object</span>
                <span v-else>⏳</span>
              </button>
              <div v-if="result.length>0" >
                <p>{{result[0].class}}</p>
              </div>
           </div>
           
        </div>
       </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');
export default {
  setup() {
    const imgRef = ref('');
    const result = ref([]);
    const isLoading = ref(false);
    const videoRef = ref('');
    const isStreaming = ref(false);

    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      // Load the model.
      const model = await cocoSsd.load();

      // Classify the image.
      const predictions = await model.detect(img);

      result.value = predictions;
      isLoading.value = false;
    }
    async function openCamera() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter((device)=>device.kind==="videoinput");
      const camId = cams[0].deviceId;
      navigator.mediaDevices
        .getUserMedia({video: {deviceId: {exact: camId}}})
        .then(stream => {
          isStreaming.value = true;
          videoRef.value.srcObject = stream;
        })    
    }
    function closeCamera() {
      const stream = videoRef.value.srcObject
      const tracks = stream.getTracks()
      tracks.map(track => track.stop());
      isStreaming.value = false;
    }
    function snapshot() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0,0,200,200);
      const data = canvas.toDataURL('image/png');
      imgRef.value.setAttribute('src',data);
    }

    return {imgRef, result, detect, snapshot, closeCamera, isStreaming, isLoading, openCamera, videoRef};
  }
}
</script>

<style>

</style>
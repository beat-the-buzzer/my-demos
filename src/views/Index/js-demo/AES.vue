<template>
  <div>
    <h2>前端加密AES</h2>
    <div class="flex">
      <el-input placeholder="请输出要存储的值" v-model="inputValue"></el-input>
    </div>
    <div class="mt30">
      加密后的值：{{encryptValue}}
    </div>
    <div class="mt30">
      解密后的值：{{decryptValue}}
    </div>
    
  </div>
</template>

<script>
import aesjs from 'aes-js';
export default {
  name: "myAES",
  data() {
    return {
      inputValue: 'AES测试',
      key: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
    };
  },

  methods: {},

  mounted() {},

  computed: {
    // 加密操作
    encryptValue() {
      var inputValue = this.inputValue;
      // An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
      var key = this.key;
      // Convert text to bytes
      var text = inputValue;
      var textBytes = aesjs.utils.utf8.toBytes(text);
      // The counter is optional, and if omitted will begin at 1
      var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
      var encryptedBytes = aesCtr.encrypt(textBytes);
      // To print or store the binary data, you may convert it to hex
      var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
      return encryptedHex;
    },
    // 解密操作
    decryptValue() {
      var encryptValue = this.encryptValue;
      var key = this.key;
      // When ready to decrypt the hex string, convert it back to bytes
      var encryptedBytes = aesjs.utils.hex.toBytes(encryptValue);
      // The counter mode of operation maintains internal state, so to
      // decrypt a new instance must be instantiated.
      var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
      var decryptedBytes = aesCtr.decrypt(encryptedBytes);
      // Convert our bytes back into text
      var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
      return decryptedText;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mt30 {
  margin-top: 30px; 
}
.flex {
  display: flex;
}

</style>

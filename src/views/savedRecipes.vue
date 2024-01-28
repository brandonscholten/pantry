<template>
  <div id="myDIV" class="header">
    <h2>Saved Recipes</h2>
    <input type="text" v-model="newItemText" id="myInput" placeholder="Search...">
    <span @click="addItem" class="addBtn">Go</span>
  </div>

  <ul id="myUL">
    <li v-for="(item, index) in items" :key="index" :class="{ checked: item.checked }" @click="toggleItem(index)">
      {{ item.text }}
      <span class="close" @click="removeItem(index)">&times;</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      newItemText: '',
    };
  },
  methods: {
    addItem() {
      if (this.newItemText.trim() === '') {
        alert('You must write something!');
        return;
      }

      this.items.push({ text: this.newItemText, checked: false });
      this.newItemText = '';
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    toggleItem(index) {
      this.items[index].checked = !this.items[index].checked;
    },
  },
};
</script>

<style scoped>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child() {
  background: #3CB371;
}

/* Darker background-color on hover */
ul li:hover {
  background: #3CB371;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #069c6c;
  color: #3CB371;
}

/* Style the header */
.header {
  background-color: #069c6c;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #7B68EE;
  color: white;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #3CB371;
}
</style>

<template>
<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Top Navigation Menu -->
<div class="topnav">
  <div class="top-bar">
    <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
    <p href="javascript:void(0);" class="hamburger" @click="toggleButtons">
      <i class="fa fa-bars"></i>
    </p>
    <p href="#home" style="text-align: right; padding-left: 20px; padding-right: 20px;">The Pantry</p>
  </div>
  <!-- Navigation links (hidden by default) -->
  <div v-if="menuVisible">
    <a href="#Enter">Enter Ingredients</a>
    <a href="#Search">Search Recipes</a>
    <a href="#Saved">Saved Recipes</a>
    <a href="#Inventory">Inventory</a>
    <a href="#Groceries">Groceries</a>, 
  </div>
</div>
</template>

<style scoped>

.top-bar{
  display: flex;
  justify-items: space-between;
  text-align: center;
  margin: auto;
}

.topnav {
  overflow: hidden;
  background-color: #228B22;
  position: relative;
  padding-left: 10px;
  margin-bottom: 10px;
}

/* Hide the links inside the navigation menu (except for logo/home) */
.topnav #myLinks {
  display: none;
}

/* Style navigation menu links */
.topnav a {
  color: white;
  border-radius: none;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

/* Style the hamburger menu */
.topnav a.icon {
  background: none;
  display: block;
  position: absolute;
  right: 1;
  top: 0;
}

/* Add a grey background color on mouse-over */
.topnav a:hover {
  background-color: none;
  color: black;
}

/* Style the active link (or home/logo) */
.active {
  background-color: #04AA6D;
  color: white;
}
</style>

<script>

export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleButtons() {
      this.menuVisible = !this.menuVisible;
    }
  }
};

// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
</script>

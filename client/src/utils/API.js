import axios from "axios";

export default {
  // Gets all menu
  getMenu: function() {
    return axios.get("/api/menu");
  },
  // Gets the book with the given id
  getMenu: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menu item with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a menu item to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menu", menuData);
  },
  testUserRouter: function(){
    return axios.get("/api/user/test");
  },
  login: function(userData){
    return axios.post("/api/user/login", userData);
  },
  logout: function(){
    return axios.get("/api/user/logout");
  },
  signup: function(userData){
    return axios.post("/api/user/signup", userData);
  },
  getUser: function(){
    return axios.get("/api/user/data");
  }
};
<h1>Vue.js</h1>

<h3>Vue生命週期</h3>
beforeCreate（創建前） 在數據觀測和初始化事件還未開始<br>

created（創建後） 完成數據觀測，屬性和方法的運算，初始化事件，$el屬性還沒有顯示出來<br>

beforeMount（載入前） 在掛載開始之前被調用，相關的render函數首次被調用。實例已完成以下的配置：編譯模板，把data裡面的數據和模板生成html。注意此時還沒有掛載html到頁面上。<br>

mounted（載入後） 在el 被新創建的 vm.$el 替換，並掛載到實例上去之後調用。實例已完成以下的配置：用上面編譯好的html內容替換el屬性指向的DOM對象。完成模板中的html渲染到html頁面中。此過程中進行ajax交互。<br>

beforeUpdate（更新前） 在數據更新之前調用，發生在虛擬DOM重新渲染和打補丁之前。可以在該鉤子中進一步地更改狀態，不會觸發附加的重渲染過程。<br>

updated（更新後） 在由於數據更改導致的虛擬DOM重新渲染和打補丁之後調用。調用時，組件DOM已經更新，所以可以執行依賴於DOM的操作。然而在大多數情況下，應該避免在此期間更改狀態，因為這可能會導致更新無限循環。該鉤子在伺服器端渲染期間不被調用。<br>

beforeDestroy（銷毀前） 在實例銷毀之前調用。實例仍然完全可用。<br>

destroyed（銷毀後） 在實例銷毀之後調用。調用後，所有的事件監聽器會被移除，所有的子實例也會被銷毀。該鉤子在伺服器端渲染期間不被調用。<br>

[原文網址](https://kknews.cc/news/zeolkzp.html)

<h3>v-if vs v-show</h3>
1.v-if 是註解掉 v-show是display:none;(代表空間有保留)<br>
2.v-if在template中可使用 v-show在template中不能使用<br>
3.v-if可搭配v-else v-else if , v-show不行<br>

[參考文章](https://ithelp.ithome.com.tw/articles/10205746)
[以信封舉例](https://blog.toright.com/posts/1203/%E6%B7%BA%E8%AB%87-http-method%EF%BC%9A%E8%A1%A8%E5%96%AE%E4%B8%AD%E7%9A%84-get-%E8%88%87-post-%E6%9C%89%E4%BB%80%E9%BA%BC%E5%B7%AE%E5%88%A5%EF%BC%9F.html)

[it鐵人幫](https://ithelp.ithome.com.tw/articles/10155801)

GET方法<br>
傳送的值藉由GET請求URL發送<br>
簡單來說GET是把資料放在header進行傳送，而在網址列會看到"http://www.xxx.com/test/index.php?test1=value1&test2=value2"<br>
同時，使用GET方式傳遞的話，並不適合傳送些隱密性較高的資料(例如：Password)，因為在傳送的過程中就會顯示在網址列上<br>

POST方法<br>
傳送的值藉由POST請求HTTP發送，簡單來說POST是把資料放在訊息主體內進行傳送<br>
而POST的請求不會被Cache紀錄、POST的請求對資料長度沒有限制，因此POST比GET更安全，所以較適合用來傳送隱密性較高的資料<br>

[教學百科](https://www.wibibi.com/info.php?tid=235)

<h4>GET</h4>
網址會帶有 HTML Form 表單的參數與資料。<br>
由於是透過 URL 帶資料，所以有長度限制。<br>
表單參數與填寫內容可在 URL 看到。<br>

<h4>POST</h4>
資料傳遞時，網址並不會改變。<br>
由於不透過 URL 帶參數，所以不受限於 URL 長度限制。<br>
透過 HTTP Request 方式，故參數與填寫內容不會顯示於 URL。<br>

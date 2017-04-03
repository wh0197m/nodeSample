## 核心点
#### 事件触发时机
* `Connection`,`listening`,`close`事件都是net.Server类的范畴
  * connection事件是在**客户端向服务端**发送连接请求后出发的
  * listening事件是在**服务器端调用server.listen()**函数后被触发的
  * close事件是在**调用server.close()**方法后被触发的
* `server.address()`方法必须要在`listening`事件后再使用，在listening事件发生前调用server.address()方法是无效的
* `server.getConnections()`方法来获取连接数
* `data`事件可以被暂停和继续急停
  * `socket.pause()` 暂停套接字data事件
  * `socket.resume()` 恢复套接字data事件

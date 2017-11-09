(function(params) {
  var socket = io.connect();
  socket.emit("客户端打来电话", function(data) {
    console.log("客户端拨电话");
  });
})();

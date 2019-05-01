process.on("tick", function(count) {
  console.log("tick 이벤트 발생 : " + count);
});

setTimeout(function() {
  process.emit("tick", "3");
}, 2000);

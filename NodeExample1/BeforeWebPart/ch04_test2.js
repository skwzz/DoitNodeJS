/*
    EventEmitter의 주요 메소드
    on(event, listener) : 지정한 이벤트의 리스너를 추가함
    once(event, listener) : 지정한 이벤트의 리스너를 추가. 한번 실행 후 자동으로 리스너가 제거됨
    removeListener(event, listener) : 지정한 이벤트에 대한 리스너를 제거
    emit() : 이벤트를 다른 쪽으로 전달하고 싶을 때 사용
*/

process.on("exit", function() {
  console.log("exit event 발생");
});

console.log("2초 후 시스템 종료 시도");
setTimeout(function() {
  console.log("2초 지남");
  process.exit();
}, 2000);

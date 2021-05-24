let userConfirm = false
let userName
while (userConfirm != true) {
  userName = prompt("당신의 이름은? : ", new Date().toLocaleDateString("ko-KR"));
  userConfirm = confirm(`당신은 ${userName}... 맞습니까?`)
}

alert(`안녕 ${userName}`);

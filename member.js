function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  return memberValue;
}
// Q6)  You have been given a head to a singly linked list of integers. Write a function check to whether the list given is a 'Palindrome' or not.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  takeInput(ele) {
    var newnode = new Node(ele);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = this.tail.next;
    }
  }
  findLength() {
    let count = 0;
    let curr = this.head;
    while (curr != null) {
      count += 1;
      curr = curr.next;
    }
    return count;
  }
  printLL() {
    var temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

var ll = new LL();
ll.takeInput(2);
ll.takeInput(3);
ll.takeInput(4);
ll.takeInput(5);
ll.takeInput(6);
// ll.takeInput(7);
//ll.printLL();
// ll.deleteEle(3);
let mid = ll.findMiddle();
ll.reverse(mid);
// ll.printLL();

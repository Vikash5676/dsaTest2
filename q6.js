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
    let curr = this.head;
    let count = 0;
    while (curr != null) {
      count++;
      curr = curr.next;
    }
    return count;
  }
  rev() {
    let arr = [];
    let curr = this.head;
    while (curr != null) {
      arr.push(curr.data);
      curr = curr.next;
    }
    arr.reverse();
    return arr;
  }

  checkPalindrome(rev, c) {
    let curr = this.head;
    let count = 0;

    for (let i = 0; i < rev.length; i++) {
      if (rev[i] == curr.data) {
        count++;
        curr = curr.next;
      }
    }
    if (count == c) console.log("the given ll is palindrome");
    else console.log("the given ll is not a palindrome");
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
ll.takeInput(3);
ll.takeInput(2);
// ll.takeInput(7);
//ll.printLL();
// ll.deleteEle(3);
let c = ll.findLength();
let ll1 = ll.rev();
ll.checkPalindrome(ll1, c);
// ll.printLL();

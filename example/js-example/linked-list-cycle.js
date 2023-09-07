/*
- Given head, the head of a linked list, determine if the linked list has a cycle in it.
- There is a cycle in a linked list if there is some node in the list that can be reached again 
by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.
- Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

function hasCycle(head) {
  // if the list is empty or has only one node, there can't be a cycle.
  if (!head || !head.next) {
    return false;
  }

  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    tortoise = tortoise.next; // move tortoise one step
    hare = hare.next.next; // move tortoise two steps

    if (tortoise === hare) {
      return true; // if the two pointers meet, there is a cycle
    }
  }
  return false;
}

const node4 = { val: -4 };
const node3 = { val: 0, next: node4 };
const node2 = { val: 2, next: node3 };
const node1 = { val: 3, next: node2 };
node4.next = node2; // create a cycle

console.log(hasCycle(node1)); // Output: true

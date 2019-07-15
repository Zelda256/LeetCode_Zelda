/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let ptr = head, len = 0;
  while(ptr) {
    len += 1;
    ptr = ptr.next;
  }
  var move = k % len;
  // let ptr = head, newHead = head, newTail = head, 
  console.log(len);
};
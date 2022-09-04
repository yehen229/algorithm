/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let cur = head;
    let pre = null;
    let temp = null;
    while(cur != null){
        temp = cur.next;
        cur.next = pre;
        pre = cur
        cur = temp;
    }
    return pre
};



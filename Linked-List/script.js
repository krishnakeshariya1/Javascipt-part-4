class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkList {
    constructor() {
        this.head = null;
    }
    addFirst(data) {
        const n1 = new Node(data);
        n1.next = this.head;
        this.head = n1
    } traverse() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
    searchByVal(val) {
        let current = this.head;
        while (current.data !== val) {
            current = current.next;
        }
        console.log(`We got the node ${current.data}`)
    }
    UpdateDataByVal(val, updateVal) {
        let current = this.head;
        while (current.data !== val) {
            current = current.next;
        }
        current.data = updateVal;
    }
}
const linkList = new LinkList()
const n7 = linkList.addFirst(5);
const n6 = linkList.addFirst(10)
const n5 = linkList.addFirst(15);
const n4 = linkList.addFirst(20)
linkList.traverse()
linkList.searchByVal(10);
linkList.UpdateDataByVal(15, 100);
linkList.traverse()

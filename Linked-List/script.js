class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkList {
    constructor(){
        this.head = null;
    }
    addFirst(data){
        const n1 = new Node(data);
        n1.next = this.head;
        this.head = n1
    } traverse(){
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}
const linkList = new LinkList()
const n7 =  linkList.addFirst(5);
const n6 = linkList.addFirst(10)
const n5 = linkList.addFirst(15);
const n4 = linkList.addFirst(20)

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
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    traverse() {
        if (this.head === null) {
            return `There is no node in linked list`;
        }
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

    searchByVal(val) {
        if (this.head === null) {
            return `There is no node in linked list`;
        }
        let current = this.head;
        while (current.data !== val) {
            current = current.next;
        }
        console.log(`We got the node ${current.data}`)
    }

    UpdateDataByVal(val, updateVal) {
        if (this.head === null) {
            return `There is no node in linked list`;
        }
        let current = this.head;
        while (current.data !== val) {
            current = current.next;
        }
        current.data = updateVal;
    }
    deleteNodeByVal(val) {
        if (this.head === null) {
            return ` There is no node in linked list`
        }

        if (this.head.data === val) {
            this.head = this.head.next;
            console.log(`Deleted head node with value ${val}`);
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== val) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            console.log(`Deleted node with value ${val}`);
        } else {
            console.log(`Value ${val} not found. Nothing deleted.`);
        }
    }
}
const linkList = new LinkList()
linkList.addFirst(5);
linkList.addFirst(10)
linkList.addFirst(15);
linkList.addFirst(20)
linkList.traverse()
linkList.searchByVal(10);
linkList.UpdateDataByVal(15, 100);
linkList.traverse()
linkList.deleteNodeByVal(10);
linkList.traverse();
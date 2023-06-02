class Node {
    constructor(value) {
      this.value = value || null;
      this.nextNode = null;
    }
  }


const LinkedList = {
    listHead: null,
    append(value) {
          let tmp = null;
          if (this.listHead != null) { 
              tmp = this.listHead
          } ;
          this.listHead = new Node(value);
          this.listHead.nextNode = tmp;
        console.log(tmp)

    }

}

LinkedList.append('test1')
LinkedList.append('test1')
LinkedList.append('test1')
LinkedList.append('test1')
LinkedList.append('test1')

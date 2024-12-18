class Node {
    constructor() {
      //better to let this.value = value and put value as a parameter in contsructor but theodinproject asked to set to null
        this.value = null;
        this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value){
      const newNode = new Node(value)
  
      if(!this.head){
        newNode.value = value
        this.head = this.tail = newNode
      }else{
        newNode.value = value
        this.tail.next = newNode;
        this.tail = newNode
      }
      this.length++
    }
  
    prepend(value){
      const newNode = new Node(value)
      newNode.value = value
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
    
    size(){
      let length = 0
      let current = this.head

      while(current){
        length ++ 
        current = current.next
      }
    
      return length
    }

    head(){
        if(this.head){return this.head}else{return null}
    }

    tail(){
        if(this.tail){return this.tail}else{return null}
    }

   at(index){
    let current = this.head
    for(let i=0; i<index; i++){
      if(current){
      current = current.next
    }else{return null}
    }
    return current
   }

   pop(){
    this.tail = this.at(this.size() - 2)
    this.tail.next = null
  }

  contains(value){
    let current = this.head
    if(current.value === value){
      return true
    }

    for(let i=0; i<this.size(); i++){
      if (current.value !== value){
        current = current.next
      }else {return true}
    }

        return false
  }

  find(value){
    let i = 0 
    let current = this.head

    for( i=0; i<this.size(); i++){
      if (current.value !== value){
        current = current.next
      }else {return i}
    }

        return null
  }

  toString(){
    let current = this.head
    let output = ""
    while(current){
      output += `( ${current.value} ) -> `
      current = current.next
    }
    return output += null
  }

  insertAt(value, index){
    const newNode = new Node()
     let current = this.head
     let indexPlusOne

     if(index === 0){
      this.prepend(value)
     }else{
     while(this.find(current.value) !== index){
      if(this.find(current.value) + 1 === index){
        indexPlusOne = current.next
        newNode.value = value
        current.next = newNode
        current = current.next
      }else{
        current = current.next
      }
     }
     current.next = indexPlusOne
     this.length++
    }
     return current
  }

  removeAt(index){
    let current = this.head
    
if(index === 0){
  this.length--
 return this.head = this.head.next
}
    while(this.find(current.value) + 1!== index){
      current = current.next
      
    }
    current.next = current.next.next
    this.length--
  }

  }
  
export default LinkedList

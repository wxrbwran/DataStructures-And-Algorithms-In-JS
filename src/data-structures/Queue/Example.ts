import Queue from './Queue';

// 击鼓传花
const hotPatato = (names: string[], times: number) => {
  const queue = new Queue(names);
  const taotaiList = [];
  while (queue.size() > 1) {
    while (times > 0) {
      const num = queue.dequeue() as string;
      queue.enqueue(num);
      times--;
    }
    taotaiList.push(queue.dequeue());
    // console.log('taotaiList', taotaiList);
  }
  return queue.peek();
};

export default hotPatato;

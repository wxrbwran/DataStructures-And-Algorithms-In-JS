import Queue from './Queue';

// 击鼓传花
export const hotPatato = (names: string[], times: number) => {
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

export const recentCounter = () => {
  const q: number[] = [];
  return {
    ping(t: number) {
      q.push(t);
      while (q[0] < t - 3000) {
        q.shift();
      }
      return q.length;
    },
  };
};

export default hotPatato;

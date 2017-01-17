export default function lerpage(steps, a, b) {
  let retval = [],
    count = steps - 1;

  for(let i = 0; i <= count; i++) {
    retval.push(a + (i / count) * (b - a));
  }

  return retval;
}

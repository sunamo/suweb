export async function getValueAfterDelay(value: any, ms: number): Promise<any> {
  await delay(ms);
  return value;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

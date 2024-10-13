export default async function guardrail(mathFunction) {
  const queue = [];

  try {
    const value = await mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    console.log('Guardrail was processed');
  }

  return queue;
}

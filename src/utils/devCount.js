//CALCULADOR DE TEMPO QUE ESTUDO PROGRAMAÇÃO
export default function devCount() {
  const today = new Date();
  const startDev = new Date("2020/09/23");
  let age = today.getFullYear() - startDev.getFullYear();
  const mon = today.getMonth() - startDev.getMonth();

  if (mon < 0 || (mon === 0 && today.getDate() < startDev.getDate())) {
    age--;
  }

  return age;
}
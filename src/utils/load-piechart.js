export const loadPie = async () => {

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }

  const response = fetch('http://bolsa-valores.infinityfreeapp.com/ws/piechart.php', {
    mode: 'no-cors' // 'cors' by default
  });

  const [data] = await Promise.all([response]);

  console.log(data)
  const dataJson = await data.json();



  return dataJson;
}

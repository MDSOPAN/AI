const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, canvas.width, canvas.height);
Papa.parse(data, {
  complete: function (results) {
    console.log("Finished:", results.data);
    // da = data;
    let max_dia = 0;
    let max_stem = 0;
    for (let i = 1; i < results.data.length; i++) {
      // console.log("Diameter :" + results.data[i][0]);
      if (max_dia < results.data[i][0] * 1) {
        max_dia = results.data[i][0] * 1;
      }
      if (max_stem < results.data[i][5] * 1) {
        max_stem = results.data[i][5] * 1;
      }
      // console.log("stem-width :" + results.data[i][5]);

      // console.log("Poisonous :" + results.data[i][8]);
      if (results.data[i][8] * 1 == 1) {
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = "blue";
      }
      ctx.fillRect(
        (results.data[i][0] * 1) / 2,
        (results.data[i][5] * 1) / 2,
        10,
        10
      );
    }

    console.log(max_dia);
    console.log(max_stem);
  },
});
